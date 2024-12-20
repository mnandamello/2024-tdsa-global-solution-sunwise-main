import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ProjectStack } from '../types/StackProject';
import { Project } from '../types/Projects';
import FontAwesome from "react-native-vector-icons/FontAwesome";

type DetailsRouteProp = RouteProp<ProjectStack, 'ProjectDetails'>;

const ProjectDetails = () => {
  const route = useRoute<DetailsRouteProp>();
  const { projectId } = route.params;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/projects/${projectId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result: Project = await response.json();
          setProject(result);
        } else {
          console.error('Erro ao buscar detalhes do projeto');
        }
      } catch (error) {
        console.error('Erro de rede', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [projectId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#CB598C" style={styles.loading} />;
  }

  if (!project) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar detalhes da campanha.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>DETALHES</Text>
      <Text style={styles.title}>Dados do projeto: </Text>

      <View style={styles.projectContainer}>
        <Text style={styles.titleProject2}>{project.nomeProjeto}</Text>

        <Text style={styles.titleProject}>Orçamento:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.orcamento}</Text>
        </View>

        <Text style={styles.titleProject}>Tarifa Mensal:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.tarifaMensal}</Text>
        </View>

        <Text style={styles.titleProject}>Tempo de retorno:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.tempoRetornoInvestimentoMeses}</Text>
        </View>

        <Text style={styles.titleProject}>Economia Mensal:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.economiaMensal}</Text>
        </View>

        <Text style={styles.titleProject}>Retorno em Anos:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.retornoEmAnos}</Text>
        </View>

        <Text style={styles.titleProject}>Economia em 10 anos:</Text>
        <View style={styles.row}>
          <Text style={styles.textproject}>{project.economia10Anos}</Text>
        </View>
      </View>

      <Text style={styles.title}>Impacto Ambiental:</Text>
      <View style={styles.impactContainer}>
        {/* <Text style={styles.impactText}>Impacto Ambiental:</Text> */}
        <Text style={styles.impactValue}>{project.impactoAmbiental}</Text>

        <Text style={styles.impactText}>CO₂ Evitado (10 anos):</Text>
        <Text style={styles.impactValue}>{project.co2Evitado10Anos}</Text>
      </View>

      <Text style={styles.title}>Dados do Cliente:</Text>
      <View style={styles.clientContainer}>
        <Text style={styles.titleProject}>Nome:</Text>
        <View style={styles.row}>
          <FontAwesome name="user" size={24} color="#FA5281" />
          <Text style={styles.client}>{project.cliente?.nome}</Text>
        </View>

        <Text style={styles.titleProject}>Email:</Text>
        <View style={styles.row}>
          <FontAwesome name="envelope" size={24} color="#FA5281" />
          <Text style={styles.client}>{project.cliente?.email}</Text>
        </View>

        <Text style={styles.titleProject}>Endereço:</Text>
        <View style={styles.row}>
          <FontAwesome name="map-marker" size={24} color="#FA5281" />
          <Text style={styles.client}>{project.cliente?.endereco}</Text>
        </View>

        <Text style={styles.titleProject}>Telefone:</Text>
        <View style={styles.row}>
          <FontAwesome name="phone" size={24} color="#FA5281" />
          <Text style={styles.client}>{project.cliente?.telefone}</Text>
        </View>
      </View>
    </ScrollView>
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
    paddingTop: 28,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FA5281',
    marginBottom: 10,
  },
  textproject: {
    fontSize: 20,
    marginLeft: 8,
    color: '#003E33',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#F38631',
    textAlign: 'center',
    marginTop: 20,
  },
  clientContainer: {
    marginBottom: 80,
    padding: 20,
    backgroundColor: 'rgba(105, 210, 231, 0.6)',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: '#FCE4ED',
    borderWidth: 2,
  },
  projectContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(105, 210, 231, 0.6)',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: '#FCE4ED',
    borderWidth: 2,
  },
  impactContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(105, 210, 231, 0.6)',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: '#FCE4ED',
    borderWidth: 2,
  },
  impactText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003E33',
    marginBottom: 5,
  },
  impactValue: {
    fontSize: 20,
    color: '#003E33',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 8,
  },
  titleProject: {
    fontSize: 20,
    color: '#003E33',
    marginLeft: 8,
    fontWeight: '700',
    marginBottom: 5,
  },
  titleProject2: {
    fontSize: 22,
    marginLeft: 8,
    color: '#003E33',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  client: {
    fontSize: 18,
    marginLeft: 8,
    color: '#003E33',
  },
});

export default ProjectDetails;