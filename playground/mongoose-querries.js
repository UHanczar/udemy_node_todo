const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '59772f0bc4f184082c7215aa';
const userId = '5964d56f3a458106b0d2fb06';
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// find your todos all (if without args) or according to querry
// Todo.find({ _id: id }).then(todos => console.log('Todos', todos));

// if we want to find one document (or first one)
// Todo.findOne({ _id: id }).then(todo => console.log('Todo', todo));

// if we want to find by id
Todo.findById(id).then(todo => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by id', todo)
}).catch(e => console.log(e));

User.findById(userId).then(user => {
  if (!user) {
    console.log('There is no this user');
  } else {
    console.log('User', user);
  }
});
