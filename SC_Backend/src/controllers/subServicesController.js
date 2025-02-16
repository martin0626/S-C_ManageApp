const SubService = require("../models/subServicesModel");
const catchAsync = require("../utils/catchAsync");
const handlerFactory = require("./handlerFactory")

//TODO Finish sub services API



exports.getAllSubServices = handlerFactory.getAll(SubService);

exports.getSingleSubService = handlerFactory.getOne(SubService);

exports.deleteSubService = handlerFactory.deleteOne(SubService);

exports.createSubService = handlerFactory.createOne(SubService);

exports.updateSubService = handlerFactory.updateOne(SubService);

