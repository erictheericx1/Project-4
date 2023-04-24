/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/api/comments`
---------------------------------------------------------------------------------------
*/


/* Require modules
--------------------------------------------------------------- */
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require('../models')

/* ROUTES
--------------------------------------------------------------- */
//Index Route (GET/Read):
router.get('/art/:artworkId', function (req, res) {
  db.Comment.find({ artworkId: req.params.artworkId })
      .then(comments => res.json(comments))
})

// Create Route (POST/Create):
router.post('/', (req, res) => {
  db.Comment.create(req.body)
      .then(comment => res.json(comment))
})

// Show Route (GET/Read):
router.get('/:id', function (req, res) {
  db.Comment.findById(req.params.id)
      .then(comment => res.json(comment))
})

// Update Route (PUT/Update):
router.put('/:id', (req, res) => {
  db.Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
  )
      .then(comment => res.json(comment))
})

// Destroy Route (DELETE/Delete):
router.delete('/:id', (req, res) => {
  db.Comment.findByIdAndRemove(req.params.id)
      .then(comment => res.json(comment))
})

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router