const request = require('request');

var fs = require('fs');


var getWeather = (latitude, longitude, callback) => {

    const apiCreds = JSON.parse(fs.readFileSync('weather/weather.json', 'utf8'));
    const requestURI = `https://api.darksky.net/forecast/${apiCreds.key}/${latitude},${longitude}`;
    
    request({
      url: requestURI,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            feels_like: body.currently.apparentTemperature
        });

      } else {
        callback(`Unable to connect to forecast.io servers.`);
      }
    });
};

module.exports.getWeather = getWeather;