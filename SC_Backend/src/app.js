const express = require('express');
const app = express();

const salonRouter  = require('./routes/salonRouters')



//Middlewares
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });




//Routes
app.use('/salons', salonRouter);

//Handle Different Url Exceptions
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: "Page Not Found"
  })
});



module.exports = app;
