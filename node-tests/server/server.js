const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'page not found',
    name: 'Todo Ap v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
      {
        name: 'UserA',
        age: 25
      },
      {
        name: 'UserB',
        age: 30
      }
    ]);
});

app.listen(3000);

module.exports = {app};