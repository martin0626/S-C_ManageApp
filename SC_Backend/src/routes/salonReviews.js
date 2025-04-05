const express = require('express');
const router = express.Router();

const salonReviewsController = require('../controllers/salonReviews');


router
    .route('/')
    .post(salonReviewsController.createSalonReview)
    .get(salonReviewsController.getAllSalonReviews)
    
module.exports = router;

