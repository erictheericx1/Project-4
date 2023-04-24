const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    artworkId: { type: String, required: true }
  }
)

module.exports = mongoose.model('Comment', commentSchema)