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




module.exports = app;