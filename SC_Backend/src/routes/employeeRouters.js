const express = require('express');
const employeeController = require('../controllers/employeeControllers')


const reviewsEmployeeRouter = require('./reviewsEmployeeRouters')
const router = express.Router();

router.use('/:id/reviews-employee', reviewsEmployeeRouter)


router
    .route('/')
    .get(employeeController.getEmployes)
    .post(employeeController.createEmployee)

router
    .route('/:id')
    .get(employeeController.getOneEmployee)
    .patch(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

    
module.exports = router;