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

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('The error has occured during adding data.', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    // _id: new ObjectID(),
    name: 'Uladzimir',
    age: 32,
    location: 'Homiel'
  }, (err, res) => {
    if (err) {
      return console.log('Unable to write user', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
    console.log(res.ops[0]._id.getTimestamp());
  });

  db.close();
});
