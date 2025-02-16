const mongoose = require('mongoose');


const subSurviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must have Name!']
    },
    price: {
        type: Number,
        min: [0.1, 'Too low price!'],
        max: 100000
    },
    gallery: {
            type: [String],
            require: false,
    },
    reviews: {
        type: [String],
        require: false,
    },
    options: {
        type: [String],
        require: false

    },
    time: {
        type: Number,
        min: [1, 'At least 1 minute!'],
        max: [1000, 'Maximum time 1000 minutes!'],
        require: false
    }
})


const SubService = mongoose.model('SubService', subSurviceSchema);
module.exports = SubService;