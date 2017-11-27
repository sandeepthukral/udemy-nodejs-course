const path = require("path");
const express = require("express");
const hbs = require("hbs");

var app = express();
hbs.registerPartials(path.resolve(__dirname , 'views/partials'));
// hbs.registerPartials((__dirname + '/views/partials'));
app.set('view engine', hbs);
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (input) => {
  return input.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('Hello! express');
  res.render('home.hbs', {
    pageTitle: 'Root page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({errorMessage: 'Error handling request'});
});

app.listen(3000, () => {
  console.log("Starting server on port 3000...");
});