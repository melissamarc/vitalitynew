
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Exercise = sequelize.define('Exercise', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    exercise_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    calories_burned: {
        type: DataTypes.INTEGER,
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

Exercise.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Exercise;
