// screens/LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http:// 192.168.3.10:5000/auth/login', { email, password });
            const { token, message: resMessage } = res.data;
            await AsyncStorage.setItem('token', token);
            setMessage(resMessage);
            navigation.replace('Main');
        } catch (err) {
            setMessage(err.response?.data?.error || 'Ocorreu um erro ao fazer login');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
            />
            <Button title="Entrar" onPress={handleLogin} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Não tem uma conta? Registre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    message: {
        color: 'red',
        marginTop: 10,
        textAlign: 'center',
    },
    link: {
        color: 'blue',
        marginTop: 15,
        textAlign: 'center',
    },
});
