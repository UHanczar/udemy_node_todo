// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// module in mongodb, which generates _id, we can inset it in _id in our collections
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable connect mongodb server.');
  }
  console.log('Connected to mongodb server.');

  // findOneAndUpdate
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5924100162ff0b5eb8b7af20')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then(res => console.log(res));

  db.close();
});
