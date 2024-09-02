// screens/ExerciseScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExerciseScreen() {
    const [exerciseName, setExerciseName] = useState('');
    const [duration, setDuration] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');
    const [customName, setCustomName] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSaveExercise = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const res = await axios.post(
                'http://localhost:5000/exercises',
                { exercise_name: exerciseName, duration, calories_burned: caloriesBurned, custom_name: customName, description },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage(res.data.message);
            setExerciseName('');
            setDuration('');
            setCaloriesBurned('');
            setCustomName('');
            setDescription('');
        } catch (err) {
            setMessage(err.response?.data?.error || 'Ocorreu um erro ao salvar o exercício');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar Exercício</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Exercício"
                onChangeText={setExerciseName}
                value={exerciseName}
            />
            <TextInput
                style={styles.input}
                placeholder="Duração (minutos)"
                keyboardType="numeric"
                onChangeText={setDuration}
                value={duration}
            />
            <TextInput
                style={styles.input}
                placeholder="Calorias Queimadas"
                keyboardType="numeric"
                onChangeText={setCaloriesBurned}
                value={caloriesBurned}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome Personalizado (Opcional)"
                onChangeText={setCustomName}
                value={customName}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Descrição (Opcional)"
                multiline
                numberOfLines={4}
                onChangeText={setDescription}
                value={description}
            />
            <Button title="Salvar Exercício" onPress={handleSaveExercise} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    message: {
        color: 'green',
        marginTop: 10,
        textAlign: 'center',
    },
});
