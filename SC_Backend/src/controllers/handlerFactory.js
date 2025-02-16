const catchAsync = require("../utils/catchAsync");





exports.getAll = Model => catchAsync(async (req, res)=>{
    const data = await Model.find();

    res.status(200).json({
        status: 'success',
        results: data.length,
        data
    })
})


exports.getOne = Model => catchAsync(async (req, res, populate)=>{
    const id = req.params.id;
    const result = await Model.findById(id);
    

    res.status(200).json({
        status: 'success',
        salon: result,
    });
})

exports.createOne = Model => catchAsync(async (req, res)=>{
    const data = req.body; 
    const newSalon = await Model.create(data);
    

    res.status(200).json({
        status: 'success',
        salon: newSalon
    });
})


exports.deleteOne = Model => catchAsync(async (req, res)=>{
    const id = req.params.id;

    await Model.findByIdAndDelete(id);

    res.status(200).json({
        status: "Deleted",
        data: null
    })
})



exports.updateOne = Model => catchAsync(async (req, res, next)=>{
    const id = req.params.id;
    const body = req.body;
    const updatedSalon = await Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true
    });
    
    res.status(200).json({
        status: 'success',
        updatedSalon,
    })
})
