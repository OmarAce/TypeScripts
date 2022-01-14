const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'language',
    }
);

module.exports = Language;