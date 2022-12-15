const Joi = require('joi');

const schema = Joi.object().keys({
  firstname: Joi.string()
    .min(3)
    .max(40)
    .required(),
  lastname: Joi.string()
    .min(3)
    .max(40)
    .required(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
  password: Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  checkPassword: Joi.ref('password'),
});

// const data = {
//   firstname: 'Srajan',
//   lastname: 'bobi',
//   email: 'bobi@gmail.com',
//   password: 'test',
//   checkPassword: 'test',
// };

// const result = schema.validate(data);
// console.log(result);
module.exports = schema;
