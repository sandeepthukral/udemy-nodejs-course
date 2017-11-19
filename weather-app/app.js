var request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=louis%20paul%20boonstraat%2021%20almere%20netherlands',
    json: true
  }, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});