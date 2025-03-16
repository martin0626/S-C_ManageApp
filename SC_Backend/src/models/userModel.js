const mongoose = require('mongoose');
const validators = require('../utils/validators')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name!'],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, 'Please provide your Email!'],
        unique: true,
        validate: [(el)=> validators.emailValidator(el), "Invalid email address!"]
    },
    password: {
        type: String,
        required: [true, "Missing password!"],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm password!"],
        validate: [function(el){
            return this.password === el
        }, 'Passwords are different!']
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
})



userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    this.passwordConfirm = undefined;
    next()
})


userSchema.methods.correctPassword = async function (passwordToCheck, password){
    return await bcrypt.compare(passwordToCheck, password);
}


userSchema.methods.changedPasswordAfter = function(JWTTimeStamp){


    if(this.passwordChangedAt){
        const formatedTime = parseInt(this.passwordChangedAt.getTime() / 1000, 10)

        console.log(formatedTime, JWTTimeStamp);
        
        return formatedTime > JWTTimeStamp;
    }

    return false;
}



const User = mongoose.model('User', userSchema);

module.exports = User;