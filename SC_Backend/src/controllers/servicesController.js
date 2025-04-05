const Services = require("../models/servicesModel");
const handlerFactory = require("./handlerFactory")

exports.getAllServices = handlerFactory.getAll(Services);

exports.createService = handlerFactory.createOne(Services);

exports.updateService = handlerFactory.updateOne(Services);

exports.getSingleService = handlerFactory.getOneById(Services);

// exports.getSingleService = handlerFactory.getOne(Services, [{ path: 'subServices', select: '-__v' }]);
