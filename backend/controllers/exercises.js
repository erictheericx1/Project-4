/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all exercises
router.get('/', function (req, res) {
    db.Exercise.find({})
        .then(exercises => res.json(exercises))
})

// New Route:
router.get('/new', (req, res) => {
    res.render('new-form')
})

// Create Route (POST/Create):
router.post('/', (req, res) => {
    db.Exercise.create(req.body)
        .then(exercise => res.redirect('/exercises/' + exercise._id))
})

// Show Route (GET/Read):
router.get('/:id', function (req, res) {
    db.Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
})

// Edit Route:
router.get('/:id/edit', (req, res) => {
    db.Exercise.findById(req.params.id)
        .then(exercise => {
            res.render('edit-form', {
                exercise: exercise
            })
        })
})

// Update Route (PUT/Update):
router.put('/:id', (req, res) => {
    db.Exercise.findByIdAndUpdate(req.params.id, req.body,
        { new: true })
        .then(exercise => res.redirect('/exercises/' + exercise._id))
})

// Destroy Route (DELETE/Delete):
router.delete('/:id', (req, res) => {
    db.Exercise.findByIdAndRemove(req.params.id)
        .then(exercise => res.json(exercise))
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router