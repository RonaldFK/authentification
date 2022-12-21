const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataSource/formulaireDataSource');

class Access extends Model {}

Access.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
    },
  },
  {
    underscored: true,
    tableName: 'access',
    sequelize,
    modelName: 'Access',
    createdAt: false,
    updatedAt: false,
  },
);
module.exports = Access;
