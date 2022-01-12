// import models
const Language = require('./Language');
const Prompt = require('./Prompt');

// Prompts belongs to Language
Prompt.belongsTo(Language);

// Languages have many prompts
Language.hasMany(Prompt)

module.exports = {
    Language,
    Prompt,
};