const express = require('express');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(cors());

app.options('*', cors());

app.use(bodyParser.json());

const userRoute = require('./routes/post')

app.use('/api', userRoute)

app.get('/', (req, res) => {
    res.send('home')
})

mongoose.connect('', 
() => {console.log('mongodb connnected')})

app.listen(5000, () => console.log('port listening'))

/* 
   dependencies & install
   npm init -y
   npm install express
   npm i body-parser
   npm install nodemon
   npm install cors
   npm i mongodb
   npm i mongoose
*/
