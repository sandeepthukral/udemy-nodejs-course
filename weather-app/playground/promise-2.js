const request = require('request');
const fs = require('fs');

var shit = (add) => {
  console.log(add);
};

var geocodeAddress = (address) => {

  return new Promise((resolve, reject) => {
    const encodedURIComponent = encodeURIComponent(address);
    const apiCreds = JSON.parse(fs.readFileSync('geocode/geocode.json', 'utf8'));
    var requestURI = `https://maps.googleapis.com/maps/api/geocode/json?api=${apiCreds.key}&address=${encodedURIComponent}`;
    
    request({
      url: requestURI,
      json: true
    }, (error, response, body) => {
      if (error){
        reject('Unable to connect to Google Service');
      } else if (body.status === 'ZERO_RESULTS'){
        reject(`Unable to find that address.`);
      } else {
        resolve({
              address: body.results[0].formatted_address,
              latitude: body.results[0].geometry.location.lat,
              longitude: body.results[0].geometry.location.lng,
              location_name: body.results[0].address_components[4].long_name
        });
      }
    });
  });
  
};

geocodeAddress('78753').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {
  console.log(error);
});