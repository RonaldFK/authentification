const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authController = {
  async signupAccount (req, res) {
    const { firstname, lastname, email, password, checkPassword } = req.body;
    // Récupération du hash du password avant stockage en bdd
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Construction de mon user avant sauvegarde en base.
    const newUser = User.build({
      firstname,
      lastname,
      email,
      login: `${req.body.firstname}.${req.body.lastname}`,
      password: hashPassword,
    });

    try {
      if (password !== checkPassword) {
        // return si pas de correspondance
        // badPassword = déclenchement message d'erreur pour l'utilisateur
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
    const currentUser = await User.findOne({ where: { login } });
    try {
      // vérification correspondance login et mdp input et base
      if (currentUser.login !== login || currentUser.password !== password) {
        return res.render('signin', { badPassword: true });
      }
      res.render('listOfAcces');
    } catch (err) {
      console.log(err);

      return res.render('signin', { badPassword: true });
    }
  },
};

module.exports = authController;
