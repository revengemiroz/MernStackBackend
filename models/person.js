const mongoose = require('mongoose')
const schema = mongoose.Schema;
const personSchema = new schema({
    _id: mongoose.Schema.Types.ObjectId,
    person_Image: {
        type: String
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String
    },
    DateOfBirth: {
        type: String
    },
    Gender: {
        type: String,
    },
    Age: {
        type: String
    },
    Married: {
        type: String
    },
    BloodGroup: {
        type: String
    },
    Horoscope: {
        type: String
    },
    Nata: {
        type: String
    }
})

//model('Person'= mongoose collection name)
const person = mongoose.model('singleperson', personSchema)
module.exports = person