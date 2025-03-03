const express = require('express');
const app = express();




const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const cors = require('cors')


//Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });




//Routers Imports
const salonRouter  = require('./routes/salonRouters');
const servicesRouter = require('./routes/servicesRouter');
const subServicesRouter = require('./routes/subServicesRouters')
const employeeRouter = require('./routes/employeeRouters');
const reviewsEmpRoter = require('./routes/reviewsEmployeeRouters')


//Routes
app.use('/salons', salonRouter);
app.use('/services', servicesRouter);
app.use('/subServices', subServicesRouter)
app.use('/employee', employeeRouter)
app.use('/reviews-employee', reviewsEmpRoter)




//Handle Different Url Exceptions
app.all('*', (req, res, next) => {  
  
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

  res.status(404).json({
    status: 404
  })
});

app.use(globalErrorHandler);


module.exports = app;


