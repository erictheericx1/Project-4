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
router.get('/exercise/:exerciseId', function (req, res) {
    console.log(req.params.exerciseId)
    db.comment.find({ exerciseId: req.params.exerciseId })
        .then(comments => res.json(comments))
})

// Create Route:
router.post('/', (req, res) => {
    db.comment.create(req.body)
        .then(comment => res.json(comment))
})

// Show Route:
router.get('/:id', function (req, res) {
    db.comment.findById(req.params.id)
        .then(comment => res.json(comment))
})

// Update Route:
router.put('/:id', (req, res) => {
    db.comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
        .then(comment => res.json(comment))
})

// Destroy Route:
router.delete('/:id', (req, res) => {
    db.comment.findByIdAndRemove(req.params.id)
        .then(comment => res.json(comment))
})



/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router