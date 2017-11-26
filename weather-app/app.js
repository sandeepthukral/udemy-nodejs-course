// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// var argv = yargs
//   .options({
//     a: {
//       demand:true,
//       alias: 'address',
//       describe: 'Address to fetch westher for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, result) => {
//   if (errorMessage){
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(result, undefined, 2));
//   }
// });


// 254978f71c2f042673fb19dbfc7c6f87

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]

const request = require('request');
 
const requestURI = 'https://api.darksky.net/forecast/254978f71c2f042673fb19dbfc7c6f87/52.37617119999999,4.8906907';

request({
  url: requestURI,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200){
    console.log(body.currently.temperature);
  } else {
    console.log(`Unable to connect to forecast.io servers. Error: ${body}`);
  }
});