const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('formulaire', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
