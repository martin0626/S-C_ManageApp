const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env' });

const port = 3000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});


//For Reference: https://github.com/jonasschmedtmann/complete-node-bootcamp/blob/master/4-natours/after-section-09/routes/tourRoutes.js