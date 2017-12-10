const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // deleteMany

  // deleteOne

  // findOneAndDelete

  // const collection = db.db('TodoApp').collection('Todos');

  // collection.deleteMany({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res);
  // });

  // collection.deleteOne({
  //   text: 'Eat lunch'
  // }).then((res) => {
  //   console.log(res);
  // });

  // collection.findOneAndDelete({
  //   completed: false
  // }).then((res) => {
  //   console.log(res);
  // });

  const collection = db.db('TodoApp').collection('Users');

  collection.deleteMany({
    name: 'Michael'
  }).then((res) => {
    console.log(res);
  });

  collection.findOneAndDelete({
    _id : new ObjectID("5a2d606958b7b4f4e6fde122")
  }).then((res) => {
    console.log(res);
  });

  // db.close();
  // console.log('Conection closed');
});