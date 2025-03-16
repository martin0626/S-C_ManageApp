const express = require('express');
const salonController = require('./../controllers/salonController');
const authController = require('../controllers/authControllers')
const router = express.Router();



router
    .route('/')
    .get(salonController.cityFilterParser, salonController.getAllSalons)
    .post(authController.protect, salonController.createSalon)

router
    .route('/:slug')
    .get(salonController.getSingleSalon)
    

router
    .route('/:id')
    .patch(salonController.updateSalon)
    .delete(salonController.delteSalon)

module.exports = router;
