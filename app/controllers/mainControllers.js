const mainController = {
  async homePage (req, res) {
    res.render('index');
  },
  signinPage (req, res) {
    res.render('signin', { msgInfo: false });
  },
  signupPage (req, res) {
    res.render('signup', { msgInfo: false, badFormData: false });
  },
};

module.exports = mainController;
