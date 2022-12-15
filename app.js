const express = require('express');
const app = express();
const router = require('./app/routers/mainRouter');
const path = require('path');
const sequelize = require('./app/dataSource/formulaireDataSource');

const mongoDb = require('./app/dataSource/mongoDataSource');
const connectMongo = require('./app/dataSource/connectMongoDatasource');
require('dotenv').config();

sequelize.authenticate();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './assets')));

//////////////////
// Connexion MongoDB
mongoDb().catch(console.dir);
// Connexion connect-mongo
app.use(connectMongo);

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server Express started on port : ${port}`);
});
