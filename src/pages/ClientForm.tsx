import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from "@react-navigation/native";
import { ClientNavigation } from "../types/StackClient";
import { ClientContext } from '../context/ClientContext';
import {Client} from '../types/Clients'


const ClientForm = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation<ClientNavigation>();
  const [client, setClient] = useState<Client>({} as Client)
  const [mensagem, setMensagem] = useState('');
  const {listClients} = useContext(ClientContext);

  const goToClientList = () => {
    navigation.navigate("ViewClients");
  };
  
  const handleInputChange = (field: keyof Client) => {
    return (text: string) => {
      setClient((previous) => ({ ...previous, [field]: text }));
    };
  };

  const registerClient= async () => {
    if (!client.nome || !client.email || !client.endereco || !client.telefone) {
      setMensagem('ERRO: Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...client, usuarioId: user?.id}),
      });

      if (response.ok) {
        setMensagem('SUCESSO: Campanha cadastrada com sucesso!');
        goToClientList();
        listClients();
      } else {
        const errorData = await response.json();
        setMensagem(errorData.message || 'Erro ao cadastrar a campanha');
      }
    } catch (error) {
      setMensagem('ERRO: Não foi possível conectar ao servidor');
    }
  };

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Cadastre aqui seu Cliente: </Text>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

        <Input
          style={styles.input}
          placeholder="Digite o nome do cliente"
          onChangeText={handleInputChange('nome')}
        />

        <Input
          style={styles.input}
          placeholder="Digite o email do cliente"
          onChangeText={handleInputChange('email')}
        />
        
        <Input
          style={styles.input}
          placeholder="Digite o endereço do cliente"
          onChangeText={handleInputChange('endereco')}
        />
        
      
        <Input
          style={styles.input}
          placeholder="Digite o telefone do cliente"
          onChangeText={handleInputChange("telefone")}
        />
        
        <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Cadastrar cliente" onPress={registerClient} />
      </View>
    );
  };

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
    label: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#0E515A', 
      textAlign: 'left',
    },
    mensagem: {
      fontSize: 16,
      color: '#FF0000', 
      marginBottom: 20,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#A5E1D4', 
      marginTop: 20,
      padding: 10,
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

export default ClientForm;