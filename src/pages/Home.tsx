import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('../../assets/LOGO2-SUNWISE.png')}
          style={styles.logo}
        />
        <Text style={styles.heading}>Bem-vindo ao SunWise</Text>

        <Text style={styles.paragraph}>
          O <Text style={styles.bold}>SunWise</Text> é um aplicativo projetado para ajudar empresas de instalação solar a gerenciar clientes e calcular o retorno de investimento dos projetos de energia solar de forma rápida e precisa.
        </Text>

        <Text style={styles.sectionTitle}>Funcionalidades Principais</Text>

        {/* Funcionalidade 1 - Cadastrar Clientes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Cadastrar Clientes</Text>
          <Text style={styles.cardText}>
            Permite que a empresa cadastre os clientes que serão donos dos projetos de energia solar.
          </Text>
        </View>

        {/* Funcionalidade 2 - Projetos e Cálculos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Projetos e Cálculos</Text>
          <Text style={styles.cardText}>
            Cadastre e gerencie projetos com informações detalhadas do cliente, orçamento, e consumo energético mensal. 
            Visualize os cálculos automáticos de retorno do investimento e economia projetada para cada projeto.
          </Text>
        </View>

        <Text style={styles.finalParagraph}>
          Facilite a decisão dos seus clientes e demonstre o impacto positivo do sistema solar.{" "}
          <Text style={styles.bold}>SunWise:</Text> A escolha certa para um futuro sustentável!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 0,
    paddingBottom: 30,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    backgroundColor: '#ddeee9',
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 150,
    marginBottom: 20,
    marginTop: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FA5281',
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#4F4F4F', 
    fontFamily: 'Montserrat',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FA5281',
    alignSelf: 'flex-start',
    marginVertical: 15,
  },
  finalParagraph: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#4F4F4F',
    fontFamily: 'Montserrat',
    marginTop: 20,
    marginBottom: 120,
  },
  bold: {
    fontWeight: 'bold',
    color: '#009782', 
  },
  card: {
    backgroundColor: '#ffeff2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007A64',
    marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
  },
  cardText: {
    fontSize: 16,
    color: '#4F4F4F',
    lineHeight: 22,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
  },
});