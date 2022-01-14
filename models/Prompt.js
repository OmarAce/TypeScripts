// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Prompt model (table) by extending off Sequelize's Model class
class Prompt extends Model {}

// set up fields and rules for Prompt model
Prompt.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    prompt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    //language_id used to relate each language to prompt
    //a language could have many prompts
    language_id: {
      type: DataTypes.INTEGER,
    //referencing the 'language' model, foreign key relates language to many prompts
      references: {
        model: 'language',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'prompt',
  }
);

module.exports = Prompt;