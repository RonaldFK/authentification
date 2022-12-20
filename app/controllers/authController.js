const User = require('../models/User');
const bcrypt = require('bcrypt');
const schema = require('../dataValidation/joi');

const saltRounds = 10;

const authController = {
  /**
   *
   * @param {*} req // Récupère les infos de création de compte.
   * @param {*} res // Renvoie ma page
   * @returns // On bloque le processus en cas de mauvais login ou password.
   */
  async signupAccount (req, res) {
    const { firstname, lastname, email, password, checkPassword } = req.body;
    // récupération du retour de la validation
    const verif = schema.validate({
      firstname,
      lastname,
      email,
      password,
    });

    // Si une erreur lors de la vérif, verif.error = True

    if (verif.error) {
      return res.render('signup', { badFormData: true, badPassword: false });
    }

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
        return res.render('signup', { badPassword: true, badFormData: false });
      } else {
        await newUser.save();
        res.render('signin', { badPassword: false });
      }
    } catch (err) {
      console.log(err);
    }
  },
  /**
   *
   * @param {*} req // Doit récupérer le crédentital ( login, passowrd) du user.
   * @param {*} res // Il renvoie ma page et construit mon objet de session
   * @returns // On bloque le processus en cas de mauvais login ou password.
   */
  async signinAccess (req, res) {
    const { login, password } = req.body;
    const currentUser = await User.findOne({ where: { login } });
    // const database = client.db('sample_mflix');
    // const sessions = database.collection('sessions');
    try {
      const decryptPassword = await bcrypt.compare(
        password,
        currentUser.password,
      );

      // vérification correspondance login et mdp input et base
      if (currentUser.login !== login || decryptPassword == false) {
        return res.render('signin', { badPassword: true });
      }

      req.session.user = currentUser;
      res.render('listOfAcces');
    } catch (err) {
      console.log(err);
      return res.render('signin', { badPassword: true });
    }
  },
};

module.exports = authController;
