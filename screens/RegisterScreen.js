// screens/RegisterScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const res = await axios.post('http://localhost:5000/auth/register', { name, email, password });
            setMessage(res.data.message);
            navigation.navigate('Login');
        } catch (err) {
            setMessage(err.response?.data?.error || 'Ocorreu um erro ao registrar');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={setName}
                value={name}
            />
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
            <Button title="Registrar" onPress={handleRegister} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Já tem uma conta? Faça Login</Text>
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
