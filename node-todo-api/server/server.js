const mongoose = require("mongoose");

const db_url = "mongodb://localhost:27017/TodoApp";

mongoose.Promise = global.Promise;
mongoose.connect(db_url, {
  useMongoClient: true
});

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }, 
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: '   Edit this video   '
});

// newTodo.save().then((doc) => {
//   console.log(`Saved todo\n ${doc}`);
// }, (err) => {
//   console.log(`Unable to save the Todo\n ${err}`);
// });

var User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    minLength: 1,
    trim: true
  }
});

var newUser = new User({
  email: ' java  '
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
  console.log(`Unable to save the document.\n ${err}`);
});