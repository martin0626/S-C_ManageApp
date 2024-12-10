exports.getAllSalons = async (req, res, next)=>{

    const salons = [
        {name: "Salon 1", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
        {name: "Salon 2", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
        {name: "Salon 3", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
    
    ]


    res.status(200).json({
        status: 'success',
        results: salons.length,
        data: {
            salons
        }
    });
}


exports.getSingleSalon = async (req, res, next)=>{

    const salons = [
        {id: 1, name: "Salon 1", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
        {id: 2, name: "Salon 2", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
        {id: 3, name: "Salon 3", title: "Lorem dasdada asda a da sdasda asdgfdglk lkj ljiy gvyt!"},
    
    ]

    const id = req.params.id;
    const result = salons.find(e=> e.id === +id);
    

    res.status(200).json({
        status: 'success',
        results: salons.length,
        data: {
            result
        }
    });
}


exports.createSalon = async (req, res, next)=>{

    const newSalon = req.body; 
    console.log(newSalon);
    

    res.status(200).json({
        status: 'success',
    });
}


exports.updateSalon = async (req, res, next)=>{

    const newSalon = req.body; 
    const id = req.params.id


    console.log(newSalon, id);
    

    res.status(200).json({
        status: 'success',
    });
}