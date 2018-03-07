// ES6 vars (and consts) are declared via the let keyword and are lexically scoped
// And important: they are not hoisted!

let globalVar = 42;
console.log('Global var:', globalVar);
console.log('Global property:', window.globalVar);

// Block scope is now available

{
    let blockVar = 17;
    console.log('Block var:', blockVar);
}
// console.log('Block var:', blockVar); // Error

for(let i = 0; i < 5; i++) {
    console.log('Loop var', i);
}
// console.log('Loop var', i); // Error

// And functions are block scoped as well!
