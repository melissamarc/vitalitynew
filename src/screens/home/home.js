import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';






function Home({ navigation }) {
 

  <Image style={styles.image} />
  return (
    <View style={styles.container}>
    
    <View style={styles.circle}>
        
      </View>

      <Text style={styles.title}>Bem Vindo À Nossa Plataforma de Saúde Online</Text>
      <Text style={styles.subtitle}>
    Acompanhe, monitore e melhore seus hábitos saudáveis.
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0EAB6E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 380,
    height: 50
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  circle: {
    width: 400, 
    height: 400,
    borderRadius: 200, 
    backgroundColor: '#E7F9ED', // Cor verde
    marginBottom: 100,
    marginTop: 100
   
  },
  image: {
    width: 120, 
    height: 120,
    borderRadius: 60, // Adiciona bordas arredondadas para a imagem, se desejar
    resizeMode: 'cover', // Mantém a proporção da imagem ao redimensionar
  },
});

export default Home;