const request = require('request');
const yargs = require('yargs')
const geocode = require('./geocode/geocode')
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address you want to fetch weather data',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.address, function(errorMessage, geoObject){
//     if(errorMessage){
//         console.log(errorMessage);
//     } else {
//         console.log(geoObject);
//     }
// });


request({
    url: `https://api.darksky.net/forecast/f84d353a69a35b4adb994d70964cac1a/21.0277644,105.8341598`,
    json: true

}, function (error, response, body) {
    if(!error && response.statusCode==200){
        console.log(body.currently);
    } else {
        console.log('Cannot get weather data');
    }    
})
