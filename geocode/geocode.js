const requets = require('request');

var geocodeAddress = function (address, callback) {
    var encodedAddress = encodeURI(address)
    requets({
        url: `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, function (error, response, body) {
        var errorMessage = null;
        var geoObject = {};

        if (error) {
            errorMessage = 'Network Error';
        } else if (body.results.length === 0) {
            errorMessage = 'Invalid Address';
        } else {
            geoObject.formatted_address = body.results[0].formatted_address
            geoObject.lat = body.results[0].geometry.location.lat
            geoObject.lng = body.results[0].geometry.location.lng
        }
        callback(errorMessage, geoObject);
    })

}

var httpCallback = function (error, response, body) {
    if (error) {
        console.log('Network Error!');
    } else if (body.results.length === 0) {
        console.log('Invalid Address!');
    } else {
        console.log(body.results[0].formatted_address);
        console.log(body.results[0].geometry.location.lat);
        console.log(body.results[0].geometry.location.lng);
    }
}

module.exports.geocodeAddress = geocodeAddress;