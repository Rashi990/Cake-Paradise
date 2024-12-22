const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dontenv = require('dotenv');

const app = express();

//import routes
const orderRoutes = require('./routes/orders');


//App middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(orderRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://Rash:rash1234@cluster0.69cipfd.mongodb.net/cakeParadiseDB?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err))

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});

