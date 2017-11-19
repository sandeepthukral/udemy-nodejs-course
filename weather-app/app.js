var request = require('request');

const yargs = require('yargs');

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

console.log(argv);

var requestURI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
requestURI += encodeURIComponent(argv.a);

request({
  url: requestURI,
  json: true
}, (error, response, body) => {
  if (error){
    console.log('Unable to connect to Google Service');
  } else if (body.status === 'OK'){
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lat: ${body.results[0].geometry.location.lat}`);
    console.log(`Lon: ${body.results[0].geometry.location.lng}`);
  } else if (body.status === 'ZERO_RESULTS'){
    console.log('Unable to find that address');
  } else {
    console.log(`This should not get printed ${body.status}`);
  }
});