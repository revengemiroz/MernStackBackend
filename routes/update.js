const router = require('express').Router()
const person = require('../models/person')
const { db } = require('../models/person')

router.patch('/:name', async (req, res) => {
    res.send('updated a person')
    var myquery = { FirstName: req.params.name };
    var newvalues = {
        $set: {

            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            DateOfBirth: req.body.DateOfBirth,
            Gender: req.body.Gender,
            Age: req.body.Age,
            Married: req.body.Married,
            BloodGroup: req.body.BloodGroup,
            Horoscope: req.body.Horoscope,
            Nata: req.body.Nata
        }
    };
    db.collection('singlepeople').updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");

    })
})

module.exports = router