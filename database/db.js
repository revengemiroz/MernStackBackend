const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Person?readPreference=primary&ssl=false', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log('connected to local mongodb')
        }
        else {
            console.log('erro in db connection')
        }
    })
