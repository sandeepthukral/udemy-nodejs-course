const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const Todo = require('./models/todo').Todo;
const User = require('./models/user').User;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.post('/users', (req, res) => {
  var user = new User({
    email: req.body.email
  });

  user.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

var port = 3000;

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});