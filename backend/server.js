// backend/server.js

require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const jwt = require('./config/jwt');
const User = require('./models/User');
const Meal = require('./models/Meal');
const MealItem = require('./models/MealItem');
const Exercise = require('./models/Exercise');
const CustomExercise = require('./models/CustomExercise');
const mealController = require('./controllers/mealController');
const exerciseController = require('./controllers/exerciseController');

const app = express();
app.use(express.json());

// Middleware para autenticar o token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    try {
        req.user = jwt.verify(token);
        next();
    } catch (err) {
        res.sendStatus(403);
    }
};

// Rotas de autenticação
app.post('/auth/register', async (req, res) => {
    // Implementar lógica de registro
});

app.post('/auth/login', async (req, res) => {
    // Implementar lógica de login
});

// Rotas de Refeições
app.post('/meals', authenticateToken, mealController.createMeal);
app.get('/meals', authenticateToken, mealController.getMeals);

// Rotas de Exercícios
app.post('/exercises', authenticateToken, exerciseController.createExercise);
app.get('/exercises', authenticateToken, exerciseController.getExercises);

// Iniciar o servidor e sincronizar o banco de dados
sequelize.sync().then(() => {
    app.listen(5000, () => {
        console.log('Servidor rodando em http://localhost:5000');
    });
});
