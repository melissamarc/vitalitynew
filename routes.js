
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/login/login';
import Home from './src/screens/home/home';

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <NavigationContainer>
    <Stack.Navigator   screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
       </NavigationContainer>
  );
}

