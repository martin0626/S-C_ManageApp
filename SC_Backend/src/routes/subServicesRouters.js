const express = require('express');
const router = express.Router();
const subServicesController = require('../controllers/subServicesController')

router.route('/')
    .get(subServicesController.getAllSubServices)
    .post(subServicesController.createSubService)

router.route('/:id')
    .get(subServicesController.getSingleSubService)
    .delete(subServicesController.deleteSubService)
    .patch(subServicesController.updateSubService)


router.route('/serviceBySalon/:slug')
    .post(subServicesController.getSubServiceBySalon)


module.exports = router;