
// this - Keyword

function showThis(label) {
    console.log(label);
    console.log(this);
}

// Global Scope
console.log(this === window);
showThis('Global Scope');

// Object Scope: Method, Constructor, Getter/Setter
var o = {
    prop: 'a prop value',
    showThis: showThis
}
o.showThis('Object Scope');

// document.querySelector('h2').addEventListener('click', showThis);

// Event Handler
document.querySelector('h2').addEventListener('click', function() {
    // For more to call, apply and bind see topic es5/call-apply-bind
    showThis.call(this, 'Event Handler');
    // showThis();   // window again, free function call
});

// Scope jumping
document.querySelector('h2').addEventListener('click', function() {
    var orginalText = this.innerHTML;
    this.innerHTML = 'Changed! Click on the paragraph below to reset';

    // var that = this;

    // document.querySelector('main>p').addEventListener('click', function() {
    //     debugger;
    //     that.innerHTML = orginalText;
    // });

    document.querySelector('main>p').addEventListener('click', (function() {
         debugger;
         this.innerHTML = orginalText;
    }).bind(this));
});

