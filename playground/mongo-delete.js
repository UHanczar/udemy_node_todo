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

   // also we can use these function without promises

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'eat lunch' }).then(res => console.log(res));
  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'eat lunch' }).then(res => console.log(res));
  // findOneAndDelete
  db.collection('Todos').findOneAndDelete({ text: 'eat lunch' }).then(res => console.log(res));

  db.close();
});
