const User = require("../models/userModel");
const { use } = require("../routes/userRouters");
const catchAsync = require("../utils/catchAsync");
const jwt = require('jsonwebtoken');



const createToken = async (id)=>{

    const dummySecret = 'SECRET';
    const dummyExpireDate = '2d';

    return await jwt.sign({id}, dummySecret, {expiresIn: dummyExpireDate});


    //TODO !!
    // console.log(process.env.JWT_SECRET);
    
    // return await jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION_DATE});
}


exports.signUp = catchAsync( async (req, res)=>{

    // const userData = req.body;
    const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    }

    const newUser = await User.create(userData);
    const token = await createToken(newUser._id);


    res.status(200).json({
        status: 'Success',
        token: token,
        data: newUser,
        
    })
});



exports.signIn = catchAsync( async(req, res, next)=>{
    const { email, password} = req.body;

    if(!email || !password){
        throw new Error("Email and Password are required for Login!");
    }

    const user = await User.findOne({ email }).select('password');
    

    if(!user || !(await user.correctPassword(password, user.password))) {
        throw new Error("Incorrect Email or Password!")
    }


    const token = await createToken(user._id);
    res.status(200).json({
        status: 'Success',
        token,
    })
})






