const catchAsync = require("../utils/catchAsync");
const Services = require("../models/servicesModel");
const handlerFactory = require("./handlerFactory")

exports.getAllServices = handlerFactory.getAll(Services);

exports.createService = handlerFactory.createOne(Services);

exports.updateService = handlerFactory.updateOne(Services);

exports.getSingleService = handlerFactory.getOne(Services);

// catchAsync( async(req, res, next)=>{
//     let { id } = req.params;
//     let data = req.body;

//     let result = await Services.findByIdAndUpdate(id, data, {
//         new: true,
//         runValidators: true
//     });

    
//     res.status(200).json({
//         status: "Success!",
//         data: result
//     })
// })

