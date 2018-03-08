
// Fat Arrow Function

// Ausgangspunkt
const add1 = function(a,b) { return a+b; };

// Statement bodied
const add2 = (a,b) => { return a+b; };
const print1 = (msg) => { console.log(msg); }

// Expression  bodied
const add3 = (a,b) => a+b;
const print2 = (msg) => console.log(msg)
const oneArg = x => x*2;

// Die FatArrow-Funcktion hat
// 1. Kein eigenes this  -> keine Methode eines Objektes
// 2. Kein arguments   -> Variable Argumente über ES6 Rest-Parameter
// 3. Kein new.target  -> kann nicht als Konstrauktor dienen
// 4. Kein Super
