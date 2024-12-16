const express = require('express');
const app = express();

const salonRouter  = require('./routes/salonRouters')
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




//Routes
app.use('/salons', salonRouter);

//Handle Different Url Exceptions
app.all('*', (req, res, next) => {  
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app;


