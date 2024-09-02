// screens/MainScreen.js

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainScreen({ navigation }) {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Button title="Registrar Refeição" onPress={() => navigation.navigate('Meal')} />
            <Button title="Registrar Exercício" onPress={() => navigation.navigate('Exercise')} />
            <Button title="Sair" onPress={handleLogout} color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});
