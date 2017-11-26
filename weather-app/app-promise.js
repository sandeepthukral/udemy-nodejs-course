const yargs = require('yargs');
const axios = require('axios');
const fs = require('fs');

var argv = yargs
  .options({
    a: {
      demand:true,
      alias: 'address',
      describe: 'Address to fetch westher for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedURIComponent = encodeURIComponent(argv.address);
const apiCreds = JSON.parse(fs.readFileSync('geocode/geocode.json', 'utf8'));

var geocodeURI = `https://maps.googleapis.com/maps/api/geocode/json?api=${apiCreds.key}&address=${encodedURIComponent}`;

axios.get(geocodeURI).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }

  console.log(response.data.results[0].formatted_address);

  const latitude = response.data.results[0].geometry.location.lat;
  const longitude = response.data.results[0].geometry.location.lng;
  
  const apiCreds = JSON.parse(fs.readFileSync('weather/weather.json', 'utf8'));
  const weatherUrl = `https://api.darksky.net/forecast/${apiCreds.key}/${latitude},${longitude}`;

  return axios.get(weatherUrl);
  
  // console.log(response.data);
}).then((response) => {
  const temperature = response.data.currently.temperature;
  const apparent_temperature = response.data.currently.apparentTemperature;
  console.log(`It is ${temperature} but it feels like ${apparent_temperature}`);
})
.catch((error) => {
  if(error.code === 'ENOTFOUND'){
    console.log('Unable to connect to API servers');
  } else {
    console.log(error.message);
  }
});