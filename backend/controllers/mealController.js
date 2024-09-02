// backend/controllers/mealController.js

const Meal = require('../models/Meal');
const MealItem = require('../models/MealItem');

module.exports = {
    createMeal: async (req, res) => {
        try {
            const { meal_name, date, items } = req.body;
            const userId = req.user.id;

            const meal = await Meal.create({ meal_name, date, user_id: userId });

            if (items && items.length > 0) {
                const mealItems = items.map(item => ({
                    food_name: item.food_name,
                    calories: item.calories,
                    meal_id: meal.id,
                }));
                await MealItem.bulkCreate(mealItems);
            }

            res.status(201).json({ message: 'Refeição registrada com sucesso!' });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao registrar refeição' });
        }
    },

    getMeals: async (req, res) => {
        try {
            const userId = req.user.id;
            const meals = await Meal.findAll({
                where: { user_id: userId },
                include: [{ model: MealItem }],
            });

            res.status(200).json(meals);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar refeições' });
        }
    }
};
