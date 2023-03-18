

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = `mongodb+srv://admin123:admin123@training.xr6wcyd.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( (data) => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

mongoose.