const request = require('request');
const fs = require('fs');

var geocodeAddress = function (address, callback) {
    const encodedURIComponent = encodeURIComponent(address);
    const apiCreds = JSON.parse(fs.readFileSync('geocode/geocode.json', 'utf8'));

    var requestURI = `https://maps.googleapis.com/maps/api/geocode/json?api=${apiCreds.key}&address=${encodedURIComponent}`;

    request({
        url: requestURI,
        json: true
    }, (error, response, body) => {
        if (error){
            callback('Unable to connect to Google Service');
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng,
                location_name: body.results[0].address_components[4].long_name
            });
        } else if (body.status === 'ZERO_RESULTS'){
            callback(`Unable to find that address.`);
        } else {
        console.log(`This should not get printed ${body.status}`);
        }
    });
};

module.exports = {
    geocodeAddress
};