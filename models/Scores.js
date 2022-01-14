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

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
          //referencing the 'User' model
            references: {
              model: 'user',
              key: 'id'
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