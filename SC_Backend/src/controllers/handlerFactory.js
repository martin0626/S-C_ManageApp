const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");





exports.getAll = Model => catchAsync(async (req, res)=>{
    const data = await Model.find();

    res.status(200).json({
        status: 'success',
        results: data.length,
        data: data
    })
})


exports.getOne = Model => catchAsync(async (req, res, next)=>{
    const id = req.params.id;
    const data = await Model.findById(id);
    
    if(!data){
        return next(new AppError('There is no ducument with ID: ' + id, 404))
    };


    res.status(200).json({
        status: 'success',
        data: data,
    });
})

exports.createOne = Model => catchAsync(async (req, res)=>{
    const data = req.body; 
    const result = await Model.create(data);
    

    res.status(201).json({
        status: 'success',
        data: result
    });
})


exports.deleteOne = Model => catchAsync(async (req, res, next)=>{
    const id = req.params.id;

    const data = await Model.findByIdAndDelete(id);

    if(!data){
        return next(new AppError('There is no ducument with ID: ' + id, 404))
    };

    res.status(200).json({
        status: "Deleted",
        data: null
    })
})



exports.updateOne = Model => catchAsync(async (req, res, next)=>{
    const id = req.params.id;
    const body = req.body;
    const doc = await Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    });
    
    if(!doc){
        return next(new AppError('There is no ducument with ID: ' + id, 404))
    };


    res.status(200).json({
        status: 'success',
        data: doc,
    })
})
