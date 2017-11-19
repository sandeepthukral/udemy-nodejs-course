var request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=singel%20421%20amsterdam%20netherlands',
    json: true
  }, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lon: ${body.results[0].geometry.location.lng}`);
});