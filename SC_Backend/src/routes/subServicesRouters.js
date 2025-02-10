const express = require('express');
const router = express.Router();
const subServicesController = require('../controllers/subServicesController')

router.route('/:serviceId')
    .get(subServicesController.getAllSubServices);


module.exports = router;