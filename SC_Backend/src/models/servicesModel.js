const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Service Name is Required!'],
        unique: true,
        trim: true,
        maxlength: [100, 'A tour name must have less or equal then 100 characters'],
        minlength: [3, 'A tour name must have more or equal then 3 characters']
    },
    category: {
        type: String,
        require: true,
        enum: {
            values: ['hair', 'face', 'body', 'nails'],
            message: 'Service category is not correct!'
        }
    },
    type: {
        type: String,
        require: true,
        maxlength: [100, 'A tour name must have less or equal then 100 characters'],
        minlength: [3, 'A tour name must have more or equal then 3 characters']
    },
    price: {
        type: Number,
        require: true,
        min: [0.11, 'Too small price!'],
        max: 10000.00,
    },
    gallery: {
        type: [String],
        require: false,
    },
    reviews: {
        type: [String],
        require: false,
    }
})


const Service = mongoose.model('Service', servicesSchema);
module.exports = Service;