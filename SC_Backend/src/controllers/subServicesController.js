const SubService = require("../models/subServicesModel");
const catchAsync = require("../utils/catchAsync");

//TODO Finish sub services API



exports.getAllSubServices = catchAsync( async (req, res, next)=>{

    const { serviceId } = req.params;

    console.log(serviceId);
    
    // let result = await SubService.find()

    res.status(200).json({
        data: 'work'
    })
});


