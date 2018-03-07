
// ES5 knows only two scopes: global and function scope

var globalVar = 42;

console.log("Global var", globalVar);
console.log("Global prop", window.globalVar);
console.log("Window prop", window["globalVar"]);
console.log("Global this prop", this.globalVar);

function globalFunc() {

    var localVar = 17;
    console.log("Global var from inner scope", globalVar);
    console.log("Local var", localVar);

    // Omitting var defines a global var!!
    secondGlobalVar = 'Ups';

    function innerLocalFunc() {

        var innerVar = 43;
        console.log("Local var from inner scope", localVar);
    }

    innerLocalFunc();
    // console.log("Local var from outer scope", innerVar); // error
};

globalFunc();
console.log("In local scope defined global var", secondGlobalVar);
console.log("Local var from global scope", window.localVar);

// Beware of the global namespace pollution !!!
var console = "browser";
