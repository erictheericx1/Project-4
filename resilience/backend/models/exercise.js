// Require the Mongoose package
const mongoose = require('mongoose');
// const commentSchema = require('./comment.js')

// Create a schema to define the properties of the excercises collection
const excerciseSchema = new mongoose.Schema({
    target: { type: String, required: true },
    name: { type: String, default: 'Unknown' },
    type: { type: String, required: true },
    muscle: { type: String, required: true },
    equipment: { type: String, required: true },
    difficulty: { type: String, required: true },
    photo: { type: String, required: true },
    instructions: { type: String, required: true },
    
    // the comments array can only accept objects that match the criteria specified
    // in the commentSchema. In other words, the comments array can only accept comments
    // comments: [commentSchema]
});

// Export the schema as a Monogoose model. 
// The Mongoose model will be accessed in `models/index.js`
module.exports = mongoose.model('Excercise', excerciseSchema);