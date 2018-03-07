
function add(a,b) { console.log(this); return a+b;}

// Apply, Call, Bind sind Methoden jedes Funktionsobjektes
// Erster Parameter: der this-Value, den die Fkt. benutzen soll
// Falls null oder undefined, dann unangetastet

// Call und Apply
console.log(add.call(null, 17, 4));
console.log(add.apply(undefined, [21, 21]));

var argumente = {
    length: 2,
    "0": 3,
    "1": 8
}
console.log( add.apply('Ups', argumente));
console.log( add.call('Ups', argumente[0], argumente[1]));

var argsArray = [].slice.call(argumente);
Array.prototype.forEach.apply(argumente,
    [function(v) { console.log(v);}]);


// Currying
// Schönfinkeln
var addTo17 = add.bind(null, 17);
console.log(addTo17(34));

// Ausblick auf ES6 - Spread-Operator
console.log(add( ...argsArray));
