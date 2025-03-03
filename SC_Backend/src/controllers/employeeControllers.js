const Employee = require('../models/employeeModel');
const { createOne, updateOne, getAll, getOneById, deleteOne } = require('./handlerFactory');


exports.createEmployee = createOne(Employee);

exports.getEmployes = getAll(Employee);

exports.updateEmployee = updateOne(Employee);

exports.getOneEmployee = getOneById(Employee, ['reviews']);


exports.deleteEmployee = deleteOne(Employee);