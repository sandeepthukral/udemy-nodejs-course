const express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('Hello! express');
  res.send({
    "name": "Sourcy",
    "likes": ["Biking", "Baking"]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/bad', (req, res) => {
  res.send({errorMessage: 'Error handling request'});
});

app.listen(3000, () => {
  console.log("Starting server on port 3000...");
});