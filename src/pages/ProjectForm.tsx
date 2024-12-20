import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';
import { Client } from "../types/Clients";
import { Project } from "../types/Projects";
import { useNavigation } from "@react-navigation/native";
import { ProjectNavigation } from "../types/StackProject";

const ProjectForm = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation<ProjectNavigation>();
  
  const [client, setClients] = useState<Client[]>([]);
  const [project, setProject] = useState<Project>({} as Project);
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState('');

  const goToViewProjects = () => {
    navigation.navigate("ViewProjects");
  };

  const handleInputChange = (field: keyof Project) => {
    return (text: string) => {
      setProject((previous) => ({ ...previous, [field]: text }));
    };
  };

  const fetchClients = async (user) => {
    if (!user?.id) {
      console.error("Erro: ID do usuário não definido.");
      return [];
    }
    try {
      const response = await fetch(`http://localhost:8080/client/usuario/${user.id}`);
      if (!response.ok) {
        throw new Error("Erro ao buscar clientes");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar clientes", error);
      return [];
    }
  };
 
  useEffect(() => {
    if (!user) {
      console.error("Erro: Usuário não autenticado.");
      return;
    }
  
    const getClients = async () => {
      try {
        const clientList = await fetchClients(user);
        setClients(clientList);
      } catch (error) {
        console.error("Erro ao buscar clientes", error);
      }
    };
  
    getClients();
  }, [user]);

  const cadastrarProjeto = async () => {
    if (!project.nomeProjeto || !project.orcamento || !project.tarifaMensal || !selectedClient) {
      setMensagem('ERRO: Preencha todos os campos e selecione um cliente.');
      return;
    }

    const payload = {
      ...project,
      usuarioId: user?.id,
      orcamento: Number(project.orcamento),
      tarifaMensal: Number(project.tarifaMensal),
      cliente: { id: selectedClient }, 
    };
  

    try {

      const response = await fetch('http://localhost:8080/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        setMensagem('SUCESSO: Projeto cadastrado com sucesso!');
        goToViewProjects();
      } else {
        const errorData = await response.json();
        setMensagem(errorData.message || 'Erro ao cadastrar o projeto');
      }
    } catch (error) {
      setMensagem('ERRO: Não foi possível conectar ao servidor');
    }
  };

  const toggleClientSelection = (clientId: number) => {
  
    setSelectedClient(prev => (prev === clientId ? null : clientId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cadastre aqui seu projeto:</Text>
  
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
  
      <Input
        style={styles.input}
        placeholder="Digite o nome do projeto"
        onChangeText={handleInputChange('nomeProjeto')}
      />
  
      <Input
        style={styles.input}
        placeholder="Digite o orçamento do projeto"
        onChangeText={handleInputChange('orcamento')}
        keyboardType="numeric"
      />
  
      <Input
        style={styles.input}
        placeholder="Digite a tarifa mensal"
        onChangeText={handleInputChange('tarifaMensal')}
        keyboardType="numeric"
      />

      <Text style={styles.texto}>Escolha o cliente do projeto:</Text> 
  
      <View style={styles.checkboxGrid}>
        {Array.isArray(client) &&
          client.map((client) => (
            <View
              key={client.id}
              style={styles.checkboxContainer}
            >
              <TouchableOpacity
                onPress={() => toggleClientSelection(client.id!)}
                style={styles.checkbox}
              >
                {selectedClient === client.id && <View style={styles.checkboxChecked} />}
              </TouchableOpacity>
              <Text style={styles.projectText}>{client.nome}</Text>
            </View>
          ))}
      </View>

      <Button
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
        title="Cadastrar projeto"
        onPress={cadastrarProjeto}
      />
    </View>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ddeee9', 
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FA5281',
    paddingTop: 50,
    marginBottom: 40,
  },
  mensagem: {
    fontSize: 16,
    color: '#FF0000', 
    marginBottom: 20,
  },
  texto:{
    color: '#114C54',
    fontSize: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#0E515A',
    marginTop: 20,
    padding: 10,
    fontSize: 16,
    color: '#114C54',
  },
  checkboxGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%', 
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#114C54',
    marginRight: 10,
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#CB598C',
    alignSelf: 'center',
  },
  projectText: {
    fontSize: 16,
    color: '#114C54', 
  },
  button: {
    backgroundColor: '#FA5281',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});


export default ProjectForm;