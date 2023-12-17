const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Exercise = require('./models/Exercise')
const exerciseRoutes = require('./routes/exercises');
const cors = require('cors')

const app = express();

app.use(bodyParser.json()) // MIDDLEWARE DEFINITION
app.use(cors())
app.use('/api/exercises', exerciseRoutes);



const db_user = 'netninja'
const db_pass = 'test1234'

const db_uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.fhjn2jp.mongodb.net/?retryWrites=true&w=majority`;



mongoose.connect(db_uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("connection successful")
        app.listen(3000)
    })
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("homepage")
})