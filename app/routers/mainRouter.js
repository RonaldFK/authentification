const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');

router.get('/', mainController.homePage);
router.get('/signin', mainController.signinPage);
router.get('/signup', mainController.signupPage);

module.exports = router;
