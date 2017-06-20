const mongoose = require('mongoose');

// setting mongoose to use promises
mongoose.Promise = global.Promise;
// connecting to our database
mongoose.connect('mongodb://localhost:27017/TodoApp');

// creating our model
const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// creating our instance
const newTodo = new Todo({
  text: 'Cook dinner'
});

const makeTodo = new Todo({
  text: 'Make new Todo',
  completed: true,
  completedAt: Date.now()
})

// saving our instance
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
