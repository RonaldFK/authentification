const session = require('express-session');
const express = require('express');
const app = express();
const MongoStore = require('connect-mongo');
// Configuration d'accès à la base de données mongo pour connect-mongo
const connectMongo = app.use(
  session({
    secret: `${process.env.SESSION_SECRET}` || 'edit to you dotenv file',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
    store: MongoStore.create({
      mongoUrl: `${process.env.CONNECT_MONGO_URL}`,
      autoRemove: 'disabled',
    }),
  }),
);

module.exports = connectMongo;
