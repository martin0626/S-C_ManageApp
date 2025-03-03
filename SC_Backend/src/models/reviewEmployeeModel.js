const mongoose = require('mongoose');

const reviewsEmpSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            min: [1.00, "Can't be given rate below 1.00!"],
            max: [5.00, 'Max rating is 5.00'],
            require: true

        },
        comment: {
            type: String,
            require: true
        },
        employee: {
            type: [
                {
                    type: mongoose.Schema.ObjectId,
                    ref: "Employee"
                }
            ]
        }
    }
)


const ReviewsEmployee = mongoose.model('ReviewsEmployee', reviewsEmpSchema);
module.exports = ReviewsEmployee;