//Dependancies
const Sequelize = require('sequelize');
require('dotenv').config();

// Sequelize Declared
let sequelize;

// Cloud Database JawsDB, if none, Local Sequelize
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT,
      logging: true,
    },
  );
}

// Export
module.exports = sequelize;