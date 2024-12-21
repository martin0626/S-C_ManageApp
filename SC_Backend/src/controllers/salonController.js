const Salon = require('../models/salonModel');
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


exports.getSingleSalon = catchAsync(async (req, res, next)=>{
        const id = req.params.id;
        const result = await Salon.findById(id)
        

        res.status(200).json({
            status: 'success',
            salon: result,
        });
})


exports.createSalon = catchAsync(async (req, res, next)=>{
        const data = req.body; 
        const newSalon = await Salon.create(data);
        
    
        res.status(200).json({
            status: 'success',
            salon: newSalon
        });
})


exports.updateSalon = catchAsync(async (req, res, next)=>{
        const id = req.params.id;
        const body = req.body;
        const updatedSalon = await Salon.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
          });
        
        res.status(200).json({
            status: 'success',
            updatedSalon,
        })
})