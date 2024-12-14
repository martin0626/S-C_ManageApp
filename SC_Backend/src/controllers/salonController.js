const Salon = require('../models/salonModel')



exports.getAllSalons = async (req, res, next)=>{

    const salons = await Salon.find()


    res.status(200).json({
        status: 'success',
        results: salons.length,
        data: {
            salons,
        }
    });
}


exports.getSingleSalon = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const result = await Salon.findById(id)
        

        res.status(200).json({
            status: 'success',
            data: {
                result
            }
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}


exports.createSalon = async (req, res, next)=>{

    try{
        const data = req.body; 
        const newSalon = await Salon.create(data);
        
    
        res.status(200).json({
            status: 'success',
            salon: newSalon
        });
    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}


exports.updateSalon = async (req, res, next)=>{

    try{
        const id = req.params.id;
        const body = req.body;
        const updatedSalon = await Salon.findByIdAndUpdate(id, body, {
            new: true,
            runValidators: true
          });
        
        res.status(200).json({
            status: 'success',
            updatedSalon,
        });

    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }

}