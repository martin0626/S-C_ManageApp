const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController')



router.route('/')
    .get(servicesController.getAllServices)
    .post(servicesController.createService)
    
router.route('/:id')
    .get(servicesController.getSingleService)
    .patch(servicesController.updateService)




module.exports = router;