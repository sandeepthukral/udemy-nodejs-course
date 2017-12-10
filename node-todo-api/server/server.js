const mongoose = require("mongoose");

const db_url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(db_url, {
  useMongoClient: true
});

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  }, 
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Eat Dinner',
  completed: true,
  completedAt: 12345678
});

newTodo.save().then((doc) => {
  console.log(`Saved todo\n ${doc}`);
}, (err) => {
  console.log('Unable to save the Todo');
});