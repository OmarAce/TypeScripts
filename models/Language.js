const { Model, DataTypes } = require('sequelize');

const squelize = require('../config/connection.js');

class Language extends Model {}

Language.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNUll: false,
            primaryKey: true,
            autoIncrement: true,
        },

        language_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        squelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language',
    }
);

module.exports = Language;