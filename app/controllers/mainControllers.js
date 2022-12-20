const mainController = {
  async homePage (req, res) {
    res.render('index');
  },
  signinPage (req, res) {
    res.render('signin', { badPassword: false });
  },
  signupPage (req, res) {
    res.render('signup', { badPassword: false, badFormData: false });
  },
};

module.exports = mainController;
