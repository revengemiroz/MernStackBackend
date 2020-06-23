const router = require('express').Router()
const person = require('../models/person')

router.get('/', async (req, res) => {
    try {
        const get = await person.find()
        res.json(get)
    } catch (error) {
        res.send(error)
    }
})

router.get('/name/:fname', async (req, res) => {
    const name = req.params.fname
    try {
        const get = await person.find({ FirstName: name })
        res.json(get)
    } catch (error) {
        res.send(error)
    }

})

router.get('/cast/:cast', async (req, res) => {
    const cast = req.params.cast
    try {
        const get = await person.find({ LastName: cast })
        res.json(get)
    } catch (error) {
        res.send(error)
    }

})

module.exports = router