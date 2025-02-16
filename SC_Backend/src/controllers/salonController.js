const Salon = require('../models/salonModel');
const handlerFactory = require('./handlerFactory');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');


exports.cityFilterParser = catchAsync(async (req, res, next)=>{
    // const city = req.query.city;
    // console.log("Middleware Example");
    next()
})

exports.getAllSalons = catchAsync(async (req, res, next)=>{
    const features = new APIFeatures(Salon.find(), req.query)
    .filterServices()
    .filterCities()
    .searchByName()
    .filter()
    .sort()
    .limitFields()
    .paginate();    

    const salons = await features.query;

    res.status(200).json({
        status: 'success',
        results: salons.length,
        salons,
    });
})


exports.getSingleSalon = handlerFactory.getOne(Salon);

exports.createSalon = handlerFactory.createOne(Salon);

exports.updateSalon = handlerFactory.updateOne(Salon);

exports.delteSalon = handlerFactory.deleteOne(Salon);