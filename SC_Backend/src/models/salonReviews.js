const mongoose = require('mongoose');



const salonReviewSchema = new mongoose.Schema(
    {
        rating: {
            type: Number,
            min: [1.00, "Can't be given rate below 1.00!"],
            max: [5.00, 'Max rating is 5.00'],
            require: true
        },
        comment: {
            type: String,
            require: true,
            minLength: 10,
        },
        image: {
            type: String,
        }
    }
); 

const ReviewsSalon = mongoose.model('salonReviews', salonReviewSchema);

module.exports = ReviewsSalon;
