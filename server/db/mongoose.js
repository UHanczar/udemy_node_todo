const mongoose = require('mongoose');

// setting mongoose to use promises
mongoose.Promise = global.Promise;
// connecting to our database
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose };
