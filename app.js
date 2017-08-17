const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address you want to fetch weather data',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, function(errorMessage, geoObject){
    if(errorMessage){
        console.log(errorMessage);
    } else {
        weather.getWeather(geoObject.lat, geoObject.lng, function(errorMessage, weatherObject){
            if(errorMessage){
                console.log(errorMessage)
            } else {
                console.log(weatherObject)
            }
        });
    }
});

