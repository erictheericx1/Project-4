/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const express = require('express');
const path = require('path')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const commentsCtrl = require('./controllers/comments')


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Middleware (app.use)
--------------------------------------------------------------- */

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


/* Mount routes
--------------------------------------------------------------- */

app.use('/api/comments', commentsCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});