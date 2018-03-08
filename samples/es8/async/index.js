
function calculate(a,b) {
    return new Promise( resolve => {
        setTimeout( () => {resolve(a+b);}, 2000);
    });
}

async function add(a,b) {
    console.log('calculating');
    const result = await calculate(a,b);
    console.log('ready');
    return result;
}

console.log('calling');
add(17,4).then(console.log);
console.log('end');

