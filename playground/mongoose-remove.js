const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');

const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

let id = 'fdlfjalf9e03ls02303i';
// for deleting multiple records we use .remove({})
Todo.remove({}).then(res => console.log(res));

// findOneAndRemove() finds and deletes first match
Todo.findOneAndRemove({ _id: id }).then(todo => console.log(todo));

// findByIdAndRemove(id) finds and removes task by id
Todo.findByIdAndRemove(id).then(todo => console.log(todo));
