const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
  }
});