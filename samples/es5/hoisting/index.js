
var globalVar = 42;

function globalFn() {

    console.log(globalVar);

    var globalVar = 17;

}

globalFn(); // Output ?

// Beware of function expressions when hoisted
function calculate() {

    var callableHelper1 = function() {};

    // Algorithm
    callableHelper1();
    callableHelper2();
    notCallableHelper3();  // Error

    function callableHelper2() {}
    var notCallableHelper3 = function(){};

}
