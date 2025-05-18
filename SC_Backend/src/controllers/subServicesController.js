const SubService = require("../models/subServicesModel");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory");
const SalonModel = require('../models/salonModel');
const { default: mongoose } = require("mongoose");


//TODO Finish sub services API



exports.getAllSubServices = handlerFactory.getAll(SubService);

exports.getSingleSubService = handlerFactory.getOneById(SubService);

exports.deleteSubService = handlerFactory.deleteOne(SubService);

exports.createSubService = handlerFactory.createOne(SubService);

exports.updateSubService = handlerFactory.updateOne(SubService);


exports.getSubServiceBySalon = catchAsync(async(req, res)=>{

    const subServIds = req.body.services || [];
    const slug = req.params.slug

    //Get Salon
    let querySalon =  SalonModel.find({ slug: {$eq: slug}});
    const salon = await querySalon;

    //Get All Sub Services
    const objectIds = subServIds.map(id => new mongoose.Types.ObjectId(id))
    const queryServices = await SubService.find({ _id: { $in: objectIds } })
    let services = await queryServices;



    

    // const data = await SubService.find();

    res.status(200).json({
        status: 'success',
        salon: salon,
        services: services
    })
})

