const mongoose = require('mongoose');
const slugify = require('slugify');


const salonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, 'Name is required!'],
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
            require: [true, 'Salon must have description.'],
        },
        services: {
            type: [String],
            enum: {
                values: ['barber', 'nails', 'hairdressing',],
                message: 'Service must be: barber, nails, hairdressing!'
            }
        },
        employees: {
            type: [String],
            require: false,
        },
        coverImg: {
            type: String,
            require: [true, 'Cover Image is requred!'],
        },
        gallery: {
            type: [String],
            require: false,
        }
    }
)


salonSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true});
    next();
})


const Salon = mongoose.model('Salon', salonSchema);
module.exports = Salon;