// backend/controllers/exerciseController.js

const Exercise = require('../models/Exercise');
const CustomExercise = require('../models/CustomExercise');

module.exports = {
    createExercise: async (req, res) => {
        try {
            const { exercise_name, duration, calories_burned, custom_name, description } = req.body;
            const userId = req.user.id;

            const exercise = await Exercise.create({
                exercise_name,
                duration,
                calories_burned,
                user_id: userId
            });

            if (custom_name) {
                await CustomExercise.create({
                    custom_name,
                    description,
                    exercise_id: exercise.id
                });
            }

            res.status(201).json({ message: 'Exercício registrado com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao registrar exercício' });
        }
    },

    getExercises: async (req, res) => {
        try {
            const userId = req.user.id;
            const exercises = await Exercise.findAll({
                where: { user_id: userId },
                include: [{ model: CustomExercise }],
            });

            res.status(200).json(exercises);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar exercícios' });
        }
    }
};
