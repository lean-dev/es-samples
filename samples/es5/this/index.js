
// this - Keyword

function showThis(label) {
    console.log(label);
    console.log(this);
}

// Global Scope
showThis('Global Scope');

// Object Scope: Method, Constructor, Getter/Setter
var o = {
    prop: 'a prop value',
    showThis: showThis
}
o.showThis('Object Scope');

// Event Handler
document.querySelector('h2').addEventListener('click', function() {
    // For more to call, apply and bind see topic es5/call-apply-bind
    showThis.call(this, 'Event Handler');
});

// Scope jumping
document.querySelector('h2').addEventListener('click', function() {
    var orginalText = this.innerHTML;
    this.innerHTML = 'Changed! Click on the paragraph below to reset';

    var handler = document.querySelector('main>p').addEventListener('click', function() {
        this.innerHTML = orginalText;
    });
    console.log(handler);
});

