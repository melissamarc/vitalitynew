// backend/models/CustomExercise.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Exercise = require('./Exercise');

const CustomExercise = sequelize.define('CustomExercise', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    custom_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Exercise,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

CustomExercise.belongsTo(Exercise, { foreignKey: 'exercise_id' });

module.exports = CustomExercise;
