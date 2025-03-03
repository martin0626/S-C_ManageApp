const ReviewsEmployee = require('../models/reviewEmployeeModel');
const catchAsync = require('../utils/catchAsync');
const handlerFactory = require('./handlerFactory');

// exports.getReviewsEmp = handlerFactory.getAll(ReviewsEmployee);

exports.getReviewsEmp = catchAsync( async (req, res) => {

    let filter = {}

    if(req.params.id){
        filter = {employee: req.params.id}
    }

    let data = await ReviewsEmployee.find(filter)

    res.status(200).json({
        result: data.length,
        data: data,
    })
})


exports.createReviewEmp = handlerFactory.createOne(ReviewsEmployee);

exports.updateReviewEmp = handlerFactory.updateOne(ReviewsEmployee);

exports.getSingleReviewEmp = handlerFactory.getOneById(ReviewsEmployee);

