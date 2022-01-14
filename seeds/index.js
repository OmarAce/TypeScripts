const seedLanguages = require('./language-seeds');
const seedPrompts = require('./prompt-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log ("\n---- DATABASE SYNCED ----\n")

    await seedLanguages();
    console.log ("\n---- LANGUAGES SYNCED ----\n")

    await seedPrompts();
    console.log ("\n---- PROMPTS SYNCED ----\n")

    process.exit(0);

};

seedAll();