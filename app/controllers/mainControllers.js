const User = require('../models/User');

const mainController = {
  async homePage (req, res) {
    res.render('index');
  },
  signinPage (req, res) {
    res.render('signin');
  },
  signupPage (req, res) {
    res.render('signup', { badPassword: false });
  },
  async signupAccount (req, res) {
    const { firstname, lastname, email, password, checkPassword } = req.body;

    // Construction de mon user avant sauvegarde en base.
    const newUser = User.build({
      firstname,
      lastname,
      email,
      login: `${req.body.firstname}.${req.body.lastname}`,
      password,
    });
    try {
      if (password !== checkPassword) {
        return res.render('signup', { badPassword: true });
      } else {
        await newUser.save();
        res.render('signin', { badPassword: false });
      }
    } catch (err) {
      console.log(err);
    }
  },
  async signinAccess (req, res) {
    const { login, password } = req.body;
    try {
      const currentUser = await User.findOne({ where: { login, password } });
      // vérification correspondance login et mdp input et base
      if (currentUser.login !== login || currentUser.password !== password) {
        return res.status(401).redirect('/signin');
      }
      res.render('listOfAcces');
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mainController;
