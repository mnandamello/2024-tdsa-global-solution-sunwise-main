import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { ProjectNavigation } from "../types/StackProject";
import { AuthContext } from '../context/AuthContext'; 
import { ProjectContext } from '../context/ProjectContext';

const ViewProjects = () => {

  const navigation = useNavigation<ProjectNavigation>();
  const { user } = useContext(AuthContext); 
  const {listProjects, projects} = useContext(ProjectContext)

  const goToProjectForm = () => {
    navigation.navigate("ProjectForm");
  };

  
  const goToDatailsPage = (item) =>  {
    navigation.navigate('ProjectDetails', { projectId: item.id });
  }

  useEffect(()=>{
    listProjects();
  }, []);

  

  const renderItem = ({ item }) => (
    <View style={styles.projectItem}>
      <Text style={styles.projectTitle}>{item.nomeProjeto}</Text>
      
      <TouchableOpacity
        style={styles.ddetailsButton}
        onPress={()=>goToDatailsPage(item)}
      >
        <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HISTÓRICO DE PROJETOS</Text>

      {projects.length === 0 ? (
        <Text style={styles.emptyText}>Você ainda não tem projetos cadastrados</Text>
      ) : (
        <FlatList
          data={projects}
          renderItem={renderItem}
          contentContainerStyle={styles.projectList}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={goToProjectForm}>
        <FontAwesome name="plus" size={20} color="#00000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddeee9',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FA5281',
    paddingTop: 50,
    marginBottom: 15
  },
  emptyText: {
    color: '#F38631',
    textAlign: 'center',
    marginTop: 20,
  },
  projectList: {
    paddingBottom: 20,
    marginBottom: 200,
  },
  projectItem: {
    backgroundColor: '#FCE4ED',
    padding: 20,
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
    marginBottom: 30,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#FA5281',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ddetailsButton: {
    backgroundColor: '#FA5281',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});


export default ViewProjects;