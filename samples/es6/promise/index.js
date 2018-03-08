
const p = new Promise( (resolve, reject) => {
    console.log('Promise created.');
    console.log('State is pending ...');

    setTimeout( () => {
        console.log('Async code ...');
        resolve(42);
    }, 2000);
} );

p.then( (data) => {
    console.log('Hurray, ' + data);
}).catch( (err) => {
    console.log('Error: ', err);
});

