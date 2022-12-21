const User = require('../models/User');
const bcrypt = require('bcrypt');
const schema = require('../dataValidation/joi');
const transporter = require('../dataValidation/nodeMailer');
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
    console.log(verif.error);
    // Si une erreur lors de la vérif, verif.error = True

    if (verif.error) {
      return res.render('signup', { badFormData: true, msgInfo: false });
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
        return res.render('signup', {
          msgInfo: 'Vérification de mot de passe non valide',
          badFormData: false,
        });
      } else {
        // Validation du compte en base de données
        // Envoie d'un mail de confirmation
        await newUser.save();
        await transporter.sendMail({
          from: `Fred Foo 👻" <${process.env.NODEMAILER_EMAIL}>`, // sender address
          to: `${req.body.email}`, // list of receivers
          subject: 'Bienvenue sur notre site', // Subject line
          text: `Bonjour, ${firstname} votre inscription est bien validée, rendez-vous sur http://localhost:${process.env.PORT}/signin`,
          html: `<p>Bonjour,<b>${firstname}</b>  votre inscription est bien validée, rendez-vous sur http://localhost:${process.env.PORT}/signin</p>`,
        });

        res.redirect('/signin');
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

    // autorisation spécifique pour le user admin natif
    if (login === 'admin') return res.render('listOfAcces');

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
