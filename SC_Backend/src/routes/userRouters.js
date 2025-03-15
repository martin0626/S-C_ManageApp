const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers')

router.route('/signUp')
    .post(userController.signUp)


router.route('/signIn')
    .post(userController.signIn)


module.exports = router;