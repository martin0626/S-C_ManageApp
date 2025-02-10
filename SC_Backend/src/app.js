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

//Routes
app.use('/salons', salonRouter);
app.use('/services', servicesRouter);
app.use('/subServices', subServicesRouter)




//Handle Different Url Exceptions
app.all('*', (req, res, next) => {  
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app;


