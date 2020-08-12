require('dotenv').config() //for env file to load up

const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')

const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('Connected to database...')
    }).catch(err => {
        console.log(err)
    })


let port = 8080 || process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}....`));