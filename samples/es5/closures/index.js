
// Definition: ?

function createCounter( startValue ) {
    startValue = startValue || 0;
    var inc = function () {
        return ++startValue;
    }
    return inc;
}
 const inc1 = createCounter(17);
 const inc2 = createCounter();

 function fn() {

    var local = 17;

    function inner() {
        return local * 2;
    }

    return inner(); // keine Closure!!!
 }
