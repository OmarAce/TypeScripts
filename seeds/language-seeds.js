const { Language } = require('../models');

const languageData = [
    {
        language_name: 'Typescript',
    },
    {
        language_name: 'Javascript',
    },
    {
        language_name: 'HTML',
    },
    {
        language_name: 'CSS',
    },
    {
        language_name: 'English',
    },
];

const seedLanguages = () => Language.bulkCreate(languageData);

module.exports = seedLanguages;