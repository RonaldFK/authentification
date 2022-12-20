const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers');
const { middleware404 } = require('../middleware/middlewares');
const authController = require('../controllers/authController');

router.get('/', mainController.homePage);
router.get('/signin', mainController.signinPage);
router.post('/signin', authController.signinAccess);
router.get('/signup', mainController.signupPage);
router.post('/signup', authController.signupAccount);
router.use(middleware404);
module.exports = router;
