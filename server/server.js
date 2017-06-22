const mongoose = require('mongoose');

// setting mongoose to use promises
mongoose.Promise = global.Promise;
// connecting to our database
mongoose.connect('mongodb://localhost:27017/TodoApp');

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

// creating our instances
const newTodo = new Todo({
  text: 'Cook dinner'
});

const makeTodo = new Todo({
  text: 'Make new Todo',
  completed: true,
  completedAt: Date.now()
});

// saving our instances
newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (err) => {
  console.log('Unable to save todo', err);
});

makeTodo.save().then((doc) =>{
  console.log('New Todo is saved', JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log('Unable to save todo', err);
});

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

const newUser = new User({
  email: 'u.hanchar@gmail.com'
});

newUser.save().then((doc) => {
  console.log('New user registered', doc);
}, (err) => {
  console.log('Unable to register new user', err);
})
