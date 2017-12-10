const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  // Insert a new doc to collection Todos (task, completed boolean)
  const collection = db.db('TodoApp').collection('Todos');
  const firstTask = {
    text: 'All Todos',
    completed: false
  };

  collection.insertOne(firstTask, (err, res) => {
    if (err) {
      return console.log('Unable to insert data\n', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  // Insert a new doc to collection 'Users' (name, age location) 
  const firstUser = {
    name: 'Andrew Jackson',
    are: 99,
    location: 'Home in Java Land'
  };

  const collection = db.db('TodoApp').collection('Users');

  collection.insertOne(firstUser, (err, res) => {
    if (err) {
      return console.log('Unable to insert data\n', err);
    }
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});