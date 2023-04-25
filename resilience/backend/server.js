/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()

const path = require('path');
const express = require('express');
const cors = require('cors')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const exercisesCtrl = require('./controllers/exercises')
const commCtrl = require('./controllers/comments')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app (app.set)
--------------------------------------------------------------- */


/* Middleware (app.use)
--------------------------------------------------------------- */
// cross origin allowance
app.use(cors())
// Body parser: used for POST/PUT/PATCH routes: 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), 'frontend')))


/* Mount routes
--------------------------------------------------------------- */
// When a GET request is sent to `/seed`, the exercises collection is seeded
app.get('/seed', function (req, res) {
    // Remove any existing exercises
    db.Exercise.deleteMany({})
        .then(removedExercises => {
            console.log(`Removed ${removedExercises.length} exercises`)

            // Seed the exercises collection with the seed data
            db.Exercise.insertMany(db.seedExercises)
                .then(addedExercises => {
                    console.log(`Added ${addedExercises.length} exercises to be adopted`)
                    res.json(addedExercises)
                })
        })
});


app.use('/exercises', exercisesCtrl)

app.use('/comments', commCtrl)


app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'frontend', 'index.html'));
});

/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});