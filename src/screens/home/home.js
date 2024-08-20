import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';


const LogoImage = require('../../../assets/logo.png');
const homeFoto = require('../../../assets/homeft.png');


function Home({ navigation }) {
  return (
    <View style={styles.container}>
    
      <Image source={LogoImage} style={styles.image} />
      <Image source={homeFoto} style={styles.image2} />

      <Text style={styles.title}> Bem Vindo À Nossa Plataforma de Saúde Online</Text>
      <Text style={styles.subtitle}>
    Acompanhe, monitore e melhore seus hábitos saudáveis!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Começar </Text>
      </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F6',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 30, 
    height: 30,
   marginTop: 80
  },
  image2: {
    width: 360, 
    height: 400,
    padding: 'auto',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C7A2E',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6D7D72',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4ADE80',
    width: 350,
    height: 50,
    borderRadius: 9,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default Home;
