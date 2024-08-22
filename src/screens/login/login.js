
import {
     StyleSheet, 
     Text, 
     View,
      Button } from 'react-native';

function Login(){
  return(
    <View style={styles.container}>
  <View style={styles.content}>
    <Text> login </Text>

  </View>
   
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;