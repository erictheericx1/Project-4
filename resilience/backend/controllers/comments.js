/* Require modules
--------------------------------------------------------------- */
const express = require('express')
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')


/* Routes
--------------------------------------------------------------- */
// Index Route (All Comments): 
router.get('/', (req, res) => {
    db.Exercise.find({}, { comments: true, _id: false })
        .then(exercises => {
            const flatList = []
            for (let exercise of exercises) {
                flatList.push(...exercise.comments)
            }
            res.json(flatList)
        })
});

// Create Route:
router.post('/create/:exerciseId', (req, res) => {
    db.Exercise.findByIdAndUpdate(
        req.params.exerciseId,
        { $push: { comments: req.body } },
        { new: true }
    )
        .then(() => res.redirect('/comments'))
});

// Show Route:
router.get('/:id', (req, res) => {
    db.Exercise.findOne(
        { 'comments._id': req.params.id },
        { 'comments.$': true, _id: false }
    )
        .then(exercise => {
            res.json(exercise.comments[0])
        })
});

// Destroy Route:
router.delete('/:id', (req, res) => {
    db.Exercise.findOneAndUpdate(
        { 'comments._id': req.params.id },
        { $pull: { comments: { _id: req.params.id } } },
        { new: true }
    )
        .then(() => res.redirect('/comments'))
});


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router