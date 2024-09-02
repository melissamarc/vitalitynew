const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Meal = sequelize.define('Meal', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    meal_name: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

Meal.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Meal;