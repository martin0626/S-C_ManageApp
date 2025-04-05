const ReviewsSalon = require("../models/salonReviews");
const handlerFactory = require("./handlerFactory")

exports.createSalonReview = handlerFactory.createOne(ReviewsSalon);

exports.getAllSalonReviews = handlerFactory.getAll(ReviewsSalon);

