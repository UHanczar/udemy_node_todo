const mongoose = require('mongoose');

// setting mongoose to use promises
mongoose.Promise = global.Promise;
// connecting to our database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
