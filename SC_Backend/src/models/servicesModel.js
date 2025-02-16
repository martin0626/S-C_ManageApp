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
    subServices: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: 'SubService'
            }
        ],
        validate: {
            validator: function(value) {
                return Array.isArray(value) && value.length > 0;
            },
            message: 'Must have at least one sub service!'
        }
    }
})



servicesSchema.pre(/^find/, function(next){

    this.populate({
        path: 'subServices',
    })

    next()
})


const Service = mongoose.model('Service', servicesSchema);
module.exports = Service;