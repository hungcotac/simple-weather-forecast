const requets = require('request');

function geocodeAddress(address) {
    return new Promise(function (resolve, reject) {
        requets({
            url: `https://maps.google.com/maps/api/geocode/json?address=${address}`,
            json: true
        }, function (error, response, body) {
            if(error){
                reject(error);
            } else {
                resolve(body);
            }
        })
    });
    // return fetch(`https://maps.google.com/maps/api/geocode/json?address=${arddress}`);
}

var promise = geocodeAddress('Hanoi');
// console.log(promise);
promise.then( (response) => {
    console.log(JSON.stringify(response, undefined, 2));
    console.log('Success');    
}).catch(function(error){
    console.log(error);
    console.log('Error');    
})

