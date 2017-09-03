/**
 * This little Demo shows the usage of Promise in ES6.
 * With Promise we be able to write much neater async code than nested callback function.
 * Prefer using Promise wherever you can to save yourself from Callback Hell
 */ 

function asyncAdd(a, b) { // a Function use Promise as a async way to execute a function
    return new Promise(function (resolve, reject) {
        setTimeout(function () { // Simulate
            if (typeof (a) === 'number' && typeof (b) === 'number') {
                resolve(a + b); // Emit resolve (success) signal after executing function body
            } else {
                reject('Two variable must be numbers'); // Emit reject (failed) signal after executing function body
            }
        }, 1000);
    })
}

// this function will return a promise;
var sumPromise = asyncAdd(15, -30);

/*** 
 * This command here will handle the result come after promise complete.
 * Promise's then() function takes 2 function as params, one for resolve and one for reject.
 */

// sumPromise.then(function (result) { // this is handler function for success case (resolve)
//     console.log(result);
// }, function(errorMessage){ // this is handler function for failed case (reject)
//     console.log(errorMessage);
// })

sumPromise.then(function (result) { // this is handler function for success case (resolve)
    console.log('The result after first add is ' + result);
    // return asyncAdd(result, 15)
}, function(errorMessage){ // this is handler function for failed case (reject)
    console.log(errorMessage);
}).then((result) => {
    console.log('The result after second add is ' + result);
}, (errorMessage) => {
    console.log(errorMessage);
})



