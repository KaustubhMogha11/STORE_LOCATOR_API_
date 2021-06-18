const express=require('express');
const port=5000;
const cors=require('cors');

const app=express();
const db = require('./config/mongoose');
const path = require('path');
const dotenv = require('dotenv');

app.use(express.static('./assets'));


// load env vars
dotenv.config({ path: './config/config.env' });

// Body parser
app.use(express.json());
app.use(express.urlencoded());

// enable cors 
app.use(cors());




// Routes
app.use('/api/v1/stores', require('./routes/stores'));



app.listen(port, function (err) {
    if (err) {
        console.log('error in running the server', error);

    }
    console.log('Server is running on port:', port);
});