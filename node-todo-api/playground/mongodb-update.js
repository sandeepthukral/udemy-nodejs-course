const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // findOneAndUpdate

  // const collection = db.db('TodoApp').collection('Todos');

  // collection.findOneAndUpdate({
  //   _id : new ObjectID('5a2d5ef658b7b4f4e6fde0a6')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });
  
  const collection = db.db('TodoApp').collection('Users');

  collection.findOneAndUpdate({
    name: 'Jen'
  }, {
    $set: {name: 'Sandeep'},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // db.close();
  // console.log('Conection closed');
});