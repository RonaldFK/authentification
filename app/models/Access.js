const { Model, DataTypes } = require('sequelize');
const sequelize = require('../dataSource/formulaireDataSource');
// const Joi = require('joi');
class Access extends Model {}

// const schema = Joi.object({
//   username: Joi.string()
//     .alphanum()
//     .min(3)
//     .max(30)
//     .required(),

//   password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

//   repeat_password: Joi.ref('password'),

//   access_token: [Joi.string(), Joi.number()],

//   birth_year: Joi.number()
//     .integer()
//     .min(1900)
//     .max(2013),

//   email: Joi.string().email({
//     minDomainSegments: 2,
//     tlds: { allow: ['com', 'net'] },
//   }),
// });

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
    tableName: 'access',
    sequelize,
    modelName: 'Access',
    createdAt: false,
    updatedAt: false,
  },
);
module.exports = Access;
