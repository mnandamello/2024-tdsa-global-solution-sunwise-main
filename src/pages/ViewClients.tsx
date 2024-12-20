import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { ClientNavigation } from "../types/StackClient";
import { AuthContext } from '../context/AuthContext'; 
import { ClientContext } from '../context/ClientContext';

const ViewClients = () => {
  const navigation = useNavigation<ClientNavigation>();
  const { user } = useContext(AuthContext); 
  const { listClients, clients, deleteClient } = useContext(ClientContext);

  const goToClientForm = () => {
    navigation.navigate("ClientForm");
  };

  useEffect(() => {
    listClients();
  }, []);

  const handleDeleteClient = (clientId: number) => {
    deleteClient(clientId);
  };

  const renderItem = ({ item }) => (
    <View style={styles.clientItem}>
      <View style={styles.clientRow}>
        <Text style={styles.clientTitulo}>{item.nome}</Text>
        <TouchableOpacity onPress={() => handleDeleteClient(item.id)} style={styles.trashButton}>
          <FontAwesome name="trash" size={24} color="#FA5281" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HISTÓRICO DE CLIENTES</Text>

      {clients.length === 0 ? (
        <Text style={styles.emptyText}>Você ainda não tem clientes cadastrados</Text>
      ) : (
        <FlatList
          data={clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.clientList}
        />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={goToClientForm}>
        <FontAwesome name="plus" size={20} color="#000000" />
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
  clientList: {
    paddingBottom: 20,
    marginBottom: 50
  },
  clientItem: {
    backgroundColor: '#FCE4ED',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 9,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clientTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#003E33',
    marginRight: 10,
  },
  trashButton: {
    padding: 5,
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
  detailsButton: {
    bottom: 70,
    right: 20,
    backgroundColor: '#FA5281',
    borderRadius: 8,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detalhesButton: {
    backgroundColor: '#FA5281',
    padding: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  detalhesButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  
});


export default ViewClients;