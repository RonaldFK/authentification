const User = require('../models/User');

const mainController = {
  async homePage (req, res) {
    const user = await User.findAll();
    console.log(user);
    res.render('index');
  },
  signinPage (req, res) {
    res.render('signin');
  },
  signupPage (req, res) {
    res.render('signup');
  },
};

module.exports = mainController;
