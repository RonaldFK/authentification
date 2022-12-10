const express = require('express');
const app = express();
const router = require('./app/routers/mainRouter');
const path = require('path');
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static(path.join(__dirname, './assets')));
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`server connected on port : ${process.env.PORT}`);
});
