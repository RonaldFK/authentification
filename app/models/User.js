const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataSource/formulaireDataSource');

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'user',
    sequelize,
    modelName: 'User',
    createdAt: false,
    updatedAt: false,
  },
);
module.exports = User;
