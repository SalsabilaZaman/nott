const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [ true, 'Title is required' ],
    trim: true,
  },
  content: { 
    type: String, 
    required: [ true, 'Content is required' ],
    trim: true,
  },
}, {
  timestamps: true,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;