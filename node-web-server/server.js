const path = require("path");
const express = require("express");
const hbs = require("hbs");
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(path.resolve(__dirname , 'views/partials'));
// hbs.registerPartials((__dirname + '/views/partials'));
app.set('view engine', hbs);

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
//   // We are not calling next(), so this is where it all stops
// });

app.use(express.static(path.resolve(__dirname, 'public')));

app.use((req, res, next) => {
  const now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', `${log} \n`, (err) => {
    if (err) console.log('Unable to log to file');
  });
  next();
});

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

app.listen(port, () => {
  console.log(`Starting server on port ${port}...`);
});