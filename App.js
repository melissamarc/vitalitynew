// App.js

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importar as telas
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'
import MainScreen from './screens/MainScreen';
import MealScreen from './screens/MealScreen';
import ExerciseScreen from './screens/ExerciseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.log('Erro ao verificar token:', error);
            } finally {
                setLoading(false);
            }
        };

        checkToken();
    }, []);

    if (loading) {
        return null; // Ou você pode mostrar um spinner de carregamento
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    <>
                        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Meal" component={MealScreen} />
                        <Stack.Screen name="Exercise" component={ExerciseScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
