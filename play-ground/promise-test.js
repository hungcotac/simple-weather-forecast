function asyncAdd(a, b) { // a Function use Promise as a async way to execute a function
    return new Promise(function (resolve, reject) {
        setTimeout(function () { // Simulate
            if (typeof (a) === 'number' && typeof (b) === 'number') {
                resolve(a + b); // Emit resolve (success) signal after executing function body
            } else {
                reject('Two variable must be numbers'); // Emit reject (failed) signal after executing function body
            }
        }, 1500);
    })
}

// this function will return a promise;
var sumPromise = asyncAdd(15, '-30');

/*** 
 * This command here will handle the result come after promise complete.
 * Promise's then() function takes 2 function as params, one for resolve and one for reject.
*/

sum.then(function (result) { // this is handler function for success case (resolve)
    console.log(result);
}, function(errorMessage){ // this is handler function for failed case (reject)
    console.log(errorMessage);
})

