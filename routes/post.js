const router = require('express').Router()

const mongoose = require('mongoose')
const person = require('../models/person')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'dsptga4nz',
    api_key: '637952337271848',
    api_secret: 'G7cPa_Orp8viKvhzUzlf0DxABTE'
})

var imageURL = ''

router.post('/', async (req, res) => {
    // console.log(req.body)
    await cloudinary.uploader.upload(req.body.person_Image, { width: 443, height: 443, crop: "thumb", gravity: "face" }, function (error, result) {

        // console.log(result, error)
        imageURL = (result.url)
        console.log('image is ' + imageURL)
    })
    const newPerson = await new person({
        _id: new mongoose.Types.ObjectId(),
        person_Image: imageURL,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender,
        Age: req.body.Age,
        Married: req.body.Married,
        BloodGroup: req.body.BloodGroup,
        Horoscope: req.body.Horoscope,
        Nata: req.body.Nata
    })
    // console.log(newPerson)
    try {
        const send = await newPerson.save()
        res.status(201).json(send)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router