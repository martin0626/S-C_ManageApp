const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './config.env' });


mongoose.connect('mongodb://localhost:27017/TestDB1').then(()=>console.log("Connected To DB..."));



const port = 3000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

