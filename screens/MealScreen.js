// screens/MealScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MealScreen() {
    const [mealName, setMealName] = useState('');
    const [date, setDate] = useState('');
    const [foodItems, setFoodItems] = useState([{ food_name: '', calories: '' }]);
    const [message, setMessage] = useState('');

    const handleAddItem = () => {
        setFoodItems([...foodItems, { food_name: '', calories: '' }]);
    };

    const handleChangeItem = (index, field, value) => {
        const newItems = [...foodItems];
        newItems[index][field] = value;
        setFoodItems(newItems);
    };

    const handleSaveMeal = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const res = await axios.post(
                'http://localhost:5000/meals',
                { meal_name: mealName, date, items: foodItems },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage(res.data.message);
            setMealName('');
            setDate('');
            setFoodItems([{ food_name: '', calories: '' }]);
        } catch (err) {
            setMessage(err.response?.data?.error || 'Ocorreu um erro ao salvar a refeição');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrar Refeição</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome da Refeição"
                onChangeText={setMealName}
                value={mealName}
            />
            <TextInput
                style={styles.input}
                placeholder="Data (AAAA-MM-DD)"
                onChangeText={setDate}
                value={date}
            />
            {foodItems.map((item, index) => (
                <View key={index} style={styles.itemContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome do Alimento"
                        onChangeText={(value) => handleChangeItem(index, 'food_name', value)}
                        value={item.food_name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Calorias"
                        keyboardType="numeric"
                        onChangeText={(value) => handleChangeItem(index, 'calories', value)}
                        value={item.calories}
                    />
                </View>
            ))}
            <Button title="Adicionar Alimento" onPress={handleAddItem} />
            <Button title="Salvar Refeição" onPress={handleSaveMeal} />
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
    itemContainer: {
        marginBottom: 10,
    },
    message: {
        color: 'green',
        marginTop: 10,
        textAlign: 'center',
    },
});
