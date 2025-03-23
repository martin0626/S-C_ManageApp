const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const authController = require('../controllers/authControllers');

router.route('/signUp')
    .post(userController.signUp)


router.route('/signIn')
    .post(userController.signIn)

router.route('/SingleUser')
    .get(authController.protect, userController.getSingleUser)


module.exports = router;