const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
console.log(process.env.DB_NAME)

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "typing_db",
    "root",
    "password1234",
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false
    },
  );
}

module.exports = sequelize;