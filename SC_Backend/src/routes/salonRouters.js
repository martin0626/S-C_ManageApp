const express = require('express');
const salonController = require('./../controllers/salonController');

const router = express.Router();



router
    .route('/')
    .get(salonController.cityFilterParser, salonController.getAllSalons)
    .post(salonController.createSalon)

router
    .route('/:id')
    .get(salonController.getSingleSalon)
    .patch(salonController.updateSalon)



module.exports = router;
