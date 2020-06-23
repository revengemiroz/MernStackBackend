const router = require('express').Router()
const person = require('../models/person')
const { db, deleteMany } = require('../models/person')

router.delete('/:name', async (req, res) => {
    const get = await person.find({ FirstName: req.params.name })
    const deleted = get[0]._id
    person.findByIdAndDelete({ _id: deleted }, function (err, docs) {
        if (err) res.json(err);
        else res.json('deleted')
    })
})

router.delete('/', async (req, res) => {
    const users = await person.remove()
    res.json('deleted all')
})

module.exports = router