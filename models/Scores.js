const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Scores extends Model {}

Scores.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        score: {
            type: DataTypes. INTEGER,
            allowNull: false,
        },

        username: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'username' 
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Scores',
    }
);

module.exports = Scores;