const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true
        },
        title: {
            type: String,
            require: true,
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
            type: [
                {
                    type: mongoose.Schema.ObjectId,
                    ref: "ReviewsEmployee"
                }
            ],
        },
        image: {
            type: String,
        },
        gallery: {
            type: [String]
        }
    }
)


employeeSchema.pre(/^find/, function(next){
    this.populate({
        path: 'salon'
    })
    
    next();
})


const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;