import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { Button, Input } from '@rneui/themed';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AuthNavigation } from "../types/StackAuth";
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigation = useNavigation<AuthNavigation>();
  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    if (senha !== confirmarSenha) {
      setMensagem('Erro: As senhas não coincidem');
      return;
    }
    await register({ nomeEmpresa, email, senha });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/LOGO2-SUNWISE.png")} />
      
      {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}

      <Input
        containerStyle={styles.inputContainer}
        style={styles.inputText}
        placeholder='Nome Completo'
        value={nomeEmpresa}
        onChangeText={setNomeEmpresa}
      />
      <Input
        containerStyle={styles.inputContainer}
        style={styles.inputText}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <Input
        containerStyle={styles.inputContainer}
        style={styles.inputText}
        placeholder='Senha'
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      <Input
        containerStyle={styles.inputContainer}
        style={styles.inputText}
        placeholder='Confirmar Senha'
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <Button
        onPress={handleRegister}
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        title="Cadastrar"
      />

      <Text style={styles.span} onPress={() => navigation.navigate('Login')}>
        Realizar Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD2DA",
    paddingTop: 70,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 180,
  },
  mensagem: {
    fontSize: 16,
    color: '#FF0000',
    marginBottom: 20,
  },
  inputContainer: {
    width: "85%",
    marginTop: 20,
  },
  inputText: {
    color: '#014337',
    fontFamily: 'Roboto',
    fontSize: 15,
  },
  span: {
    fontSize: 14,
    marginTop: 20,
    fontFamily: 'Roboto',
    color: '#014337',
  },
  buttonTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  buttonContainer: {
    width: 118,
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FA5281",
  },
});

export default Register;
