const catchAsync = require("../utils/catchAsync");
const Services = require("../models/servicesModel");

exports.getAllServices = catchAsync( async (req, res, next)=>{

    let result = await Services.find()

    res.status(200).json({
        data: result
    })
});



exports.createService = catchAsync( async(req, res, next)=>{
    let data = req.body;
    let result = await Services.create(data);
    
    res.status(201).json({
        status: "Created!",
        data: result
    })
})


exports.updateService = catchAsync( async(req, res, next)=>{
    let { id } = req.params;
    let data = req.body;

    let result = await Services.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    });

    
    res.status(200).json({
        status: "Success!",
        data: result
    })
})

exports.getSingleService = catchAsync( async(req, res, next)=>{
    let { id } = req.params;

    let data = await Services.findById(id);

    res.status(200).json(
        {
            data: data
        }
    )
})

