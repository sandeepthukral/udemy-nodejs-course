const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, resultGeo) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(resultGeo.address);
    weather.getWeather(resultGeo.latitude, resultGeo.longitude, (errorMessage, resultWea) => {
      if (!errorMessage){
        console.log(`It is ${resultWea.temperature} in ${resultGeo.location_name} but feels like ${resultWea.feels_like}`);
      }
    });
  }
});