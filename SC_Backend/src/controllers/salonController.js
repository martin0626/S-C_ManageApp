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
        data: salons,
    });
})



exports.getSingleSalon = catchAsync(async (req, res)=>{
    let slug = req.params.slug;


    let data = await Salon
        .find({ slug: {$eq: slug}})
        .populate({
            path: 'services'
        });


    res.status(200).json({
        status: 'success', 
        data: data
    })

})


exports.createSalon = handlerFactory.createOne(Salon);

exports.updateSalon = handlerFactory.updateOne(Salon);

exports.delteSalon = handlerFactory.deleteOne(Salon);