const axios = require('axios');
const yargs = require('yargs');
// const geocode = require('./geocode/geocode');
// const weather = require('./weather/weather');

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

let address = argv.address;
let encodedAddress = encodeURIComponent(address);
let getAddressURI = `https://maps.google.com/maps/api/geocode/json?address=${encodedAddress}`;

var formatted_address = '';
axios.get(getAddressURI).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Cannot find this address');
    } else {
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        formatted_address = response.data.results[0].formatted_address
        let tempURL = `https://api.darksky.net/forecast/f84d353a69a35b4adb994d70964cac1a/${lat},${lng}`;
        return axios.get(tempURL);

    }

}).then((response) => {
    console.log(`The current tempature at ${formatted_address} is ${response.data.currently.temperature}`);
}).catch((error) => {
    console.log(error);
})

