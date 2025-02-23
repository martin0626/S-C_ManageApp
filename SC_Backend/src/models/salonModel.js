const mongoose = require('mongoose');
const slugify = require('slugify');


const salonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            unique: true,
            trim: true,
            maxlength: [40, 'A tour name must have less or equal then 40 characters'],
            minlength: [3, 'A tour name must have more or equal then 3 characters']
        },
        slug: {
            type: String,
            unique: true,
            default: '',
        },
        description: {
            type: String,
            required: [true, 'Salon must have description.'],
        },
        servicesFilter: {
            type: [String],
            enum: {
                values: ['barber', 'nails', 'hairdressing',],
                message: 'Service must be: barber, nails, hairdressing!'
            }
        },
        employees: {
            type: [String],
            required: false,
        },
        coverImg: {
            type: String,
            required: [true, 'Cover Image is requred!'],
        },
        gallery: {
            type: [String],
            required: false,
        },
        rating: {
            type: Number,
            default: 4.5,
            min: [1, 'Rating must be above 1.0'],
            max: [5, 'Rating must be below 5.0']
        },
        city: {
            type: String,
            required: [true, "Please specify city!"],
        },
        country: {
            type: String,
            required: [true, "Please specify country!"],
        }, 
        location: {
            type: String,
            default: '',
        },
        services: {
            type: [
                {
                    type: mongoose.Schema.ObjectId,
                    ref: 'Service',
                }
            ],
            validate: {
                validator: function(value) {
                    return Array.isArray(value) && value.length > 0;
                },
                message: 'Must have at least one service!'
            }
        }
    }
)


salonSchema.index({ slug: 1 }, { unique: true }); 


salonSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true});
    next();
})

// salonSchema.pre(/^find/, function(next){

//     this.populate({
//         path: 'services',
//     })
//     next()
// })


const Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;