const mongoose = require('mongoose');


const employeeSchem = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    salon: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "Salon",
            }
        ]
    },
    reviews: {
        type: [String],
    },
    image: {
        type: String,
    },
    gallery: {
        type: [String]
    }

})
