const express = require('express')
const PORT = process.env.PORT || 8000
const cors = require('cors')
const mongoose = require('mongoose')
const person = require('./models/person')
const app = express()
const bodyParser = require('body-parser')

//all the routes
const getRoutes = require('./routes/get')
const postRoutes = require('./routes/post')
const deleteRoutes = require('./routes/delete')
const updateRoutes = require('./routes/update')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '50000kb' }));
// parse application/json


app.use(cors())





//mongoose database
mongoose.connect("mongodb+srv://miroz:Revenge21@cluster0-9atwk.mongodb.net/test", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log('connected to local mongodb')
        }
        else {
            console.log('erro in db connection')
        }
    })



//get,post,delete,update
app.use('/person', getRoutes)
app.use('/person', postRoutes)
app.use('/person', deleteRoutes)
app.use('/person', updateRoutes)

app.listen(PORT, () => {
    console.log('server started')
})

//this is the heroku pushed version