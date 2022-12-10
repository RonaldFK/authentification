const mainController = {
  homePage (req, res) {
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
