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

  // db.collection('Todos').find({
  //   _id: new ObjectID('591ade7456ce7614689446f4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable add todo', err)
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable add todo', err)
  // });

  db.collection('Users').find({ name: 'Uladzimir' }).toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable add todo', err)
  });

  db.close();
});
