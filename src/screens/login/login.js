
import {
     StyleSheet, 
     Text, 
     View,
      Button } from 'react-native';

function Login(){
  return(
    <View style={styles.container}>
    <Text>Login</Text>
   
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
});

export default Login;