
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Meal = require('./Meal');

const MealItem = sequelize.define('MealItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    food_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    meal_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Meal,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

MealItem.belongsTo(Meal, { foreignKey: 'meal_id' });

module.exports = MealItem;