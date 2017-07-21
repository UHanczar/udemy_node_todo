const mongoose = require('mongoose');

// creating our model
const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, // requires text property to exist
    minlength: 1, // sets minimal length of string
    trim: true // trims whitespaces on start and end of string
  },
  completed: {
    type: Boolean,
    default: false // set default value
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };
