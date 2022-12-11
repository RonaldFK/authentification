const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataSource/formulaireDataSource');

class Member extends Model {}

Member.init(
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'member',
    sequelize,
    modelName: 'Member',
    createdAt: false,
    updatedAt: false,
  },
);
module.exports = Member;
