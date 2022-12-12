const express = require('express');
const app = express();
const router = require('./app/routers/mainRouter');
const path = require('path');
const sequelize = require('./app/dataSource/formulaireDataSource');
const session = require('express-session');
const pg = require('pg');
const pgSession = require('connect-pg-simple')(session);
require('dotenv').config();

sequelize.authenticate();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './assets')));

const pgPool = new pg.Pool({
  user: `${process.env.PGUSER}`,
  password: `${process.env.PGPASSWORD}`,
  database: `${process.env.PGDATABASE}`,
  host: `${process.env.PGHOST}`,
  port: `${process.env.PGPORT}`,
});

app.use(
  session({
    store: new pgSession({
      pool: pgPool, // Connection pool
      tableName: 'user_session', // Use another table-name than the default "session" one
      // Insert connect-pg-simple options here
      errorLog: true,
    }),
    secret: `${process.env.SESSION_SECRET}` || 'edit to you dotenv file',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  }),
);
// app.use(middleware.middlewareSession);
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server connected on port : ${port}`);
});
