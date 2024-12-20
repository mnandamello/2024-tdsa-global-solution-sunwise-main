import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/themed';
import React, { useContext } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AuthNavigation } from "../types/StackAuth";
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation<AuthNavigation>();

  const doAuth = async () => {
    await signIn({ email, senha });
  };

  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/LOGO2-SUNWISE.png")} />
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

      <Text style={styles.span} onPress={goToRegister}>
        Cadastre-se
      </Text>

      <Button
        onPress={doAuth}
        titleStyle={styles.buttonTitle}
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        title="Login"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAD2DA",
    paddingTop: 120,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 180,
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
    width: 170,
    borderRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#FA5281",
  },
});

export default Login;
