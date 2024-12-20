import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserAccount = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Página do Usuário</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dados do Usuário</Text>
        <Text style={styles.info}>Nome da Empresa: {user?.nomeEmpresa}</Text>
        <Text style={styles.info}>Email: {user?.email}</Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={signOut}>
        <Text style={styles.buttonText}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UserAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ddeee9',
  },
  header: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FA5281',
    paddingTop: 50,
    marginBottom: 30,
    fontFamily: 'Montserrat-Bold',
  },
  card: {
    backgroundColor: '#ffeff2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: '#FCE4ED',
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#003E33',
    fontFamily: 'Montserrat-Bold',
  },
  info: {
    fontSize: 16,
    color: '#4F4F4F',
    marginBottom: 8,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#FA5281',
    width: 200,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
  },
});