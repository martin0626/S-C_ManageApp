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
        type: [String]
    },
    services: {
        type: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Service'
        }]
    }
})


const SubService = mongoose.model('SubService', subSurviceSchema);
module.exports = SubService;