const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // const collection = db.db('TodoApp').collection('Todos');

  // collection.find({
  //   completed: false
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch docs from DB');
  // });

  // collection.find({
  //   _id: new ObjectID('5a2d106a4f4a701962308524')
  // }).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch docs from DB');
  // });


  // collection.find().count().then((count) => {
  //   console.log(`Todos count: ${count}`)
  // }, (err) => {
  //   console.log('Unable to fetch docs from DB');
  // });

  const collection = db.db('TodoApp').collection('Users');

  collection.find({
    name: 'Andrew Jackson'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch docs from DB');
  });

  // // Insert a new doc to collection Todos (task, completed boolean)
  // const collection = db.db('TodoApp').collection('Todos');
  // const firstTask = {
  //   text: 'All Todos',
  //   completed: false
  // };

  // collection.insertOne(firstTask, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert data\n', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // Insert a new doc to collection 'Users' (name, age location) 
  // const firstUser = {
  //   name: 'Andrew Jackson',
  //   age: 99,
  //   location: 'Home in Java Land'
  // };

  // const collection = db.db('TodoApp').collection('Users');

  // collection.insertOne(firstUser, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert data\n', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  // db.close();
  // console.log('Conection closed');
});