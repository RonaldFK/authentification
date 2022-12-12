const express = require('express');
const app = express();
const router = require('./app/routers/mainRouter');
const path = require('path');
const sequelize = require('./app/dataSource/formulaireDataSource');
const session = require('express-session');
const middleware = require('./app/middleware/middlewares');
require('dotenv').config();

sequelize.authenticate();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './assets')));
app.use(
  session({
    secret: 'a placer ensuite dans mon dotenv',
    resave: true,
    saveUninitialized: false,
    cookie: {},
  }),
);
// app.use(middleware.middlewareSession);
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server connected on port : ${port}`);
});
