// import models
const Language = require('./Language');
const Prompt = require('./Prompt');
const Scores = require('./Scores');
const User = require('./User');

// Prompts belongs to Language
Prompt.belongsTo(Language);

// Languages have many prompts
Language.hasMany(Prompt);

// Users have many scores
User.hasMany(Scores);

Scores.belongTo(User);

module.exports = {
    Language,
    Prompt,
    User,
    Scores,
};