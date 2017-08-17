const request = require('request');

var getWeather = function (lat, lng, callback) {
    console.log(`lat: ${lat}, lng: ${lng}`);
    var errorMessage = null;
    var weatherObject = {};
    request({
        url: `https://api.darksky.net/forecast/f84d353a69a35b4adb994d70964cac1a/${lat},${lng}`,
        json: true

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            weatherObject.lat = lat;
            weatherObject.lng = lng;
            weatherObject.temp = body.currently.temperature;
        } else {
            errorMessage = 'Cannot get weather data';
        }
        callback(errorMessage, weatherObject);
    })
}

module.exports.getWeather = getWeather;

