const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const { promisify } = require('util');
const { log } = require('console');
const User = require('../models/userModel');


const dummySecret = 'SECRET';
const dummyExpireDate = '2d';

exports.createToken = async (id)=>{
    return await jwt.sign({id}, dummySecret, {expiresIn: dummyExpireDate});


    //TODO !!
    // console.log(process.env.JWT_SECRET);
    
    // return await jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION_DATE});
}




exports.protect = catchAsync(async(req, res, next)=>{


    // Check if Token Exist
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token){
        throw new Error("Authorization required for this route!");
    }

    //Check if token is valid
    const decoded = await promisify(jwt.verify)(token, dummySecret)

    console.log(decoded);
    
    const user = await User.findById(decoded.id);

    if(!user){
        throw new Error("User does no longer exist!");
    }


    //Check if password was changed after token was issued
    if(user.changedPasswordAfter(decoded.iat)){
        throw new Error("Password has been changed!");
    }

    req.user = user;
    next();
})