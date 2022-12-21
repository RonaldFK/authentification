const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_SMTP,
  port: 587,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PWD,
  },
});

module.exports = transporter;
