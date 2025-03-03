const express = require('express');
const router = express.Router({mergeParams: true});
const reviewsEmpController = require('../controllers/reviewEmployeeControllers');

router
    .route('/')
    .get(reviewsEmpController.getReviewsEmp)
    .post(reviewsEmpController.createReviewEmp);

router.route('/:id')
    .get(reviewsEmpController.getSingleReviewEmp)
    .patch(reviewsEmpController.updateReviewEmp);

module.exports = router;