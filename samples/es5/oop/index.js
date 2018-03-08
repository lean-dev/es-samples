(function () {

    // Layer 1 - Literale Objekte
    'use strict';

    // einfacher Array-Store
    var todos = [];

    var propName = "firstname";
    var demo = {
        [propName]: 'Micha',
        _privat: 0,
        get privat() { return this._privat; }
    };
    Object.defineProperty(demo,'lastname', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: 'Alt'
    });
Object.defineProperty(demo, 'age', {
        enumerable: false,
        configurable: false,
        get: function() {
            return new Date().getFullYear() - 1971;
        }
})
    window.demoObj = demo;

    // literales Objekt
    // Key-Value Maps (PropertyName -> Value)
    // Methode: Value ist Function
    var t1 = {
        "txt": "OOP",
        _completed: false,
        get completed() { return this._completed; },
        toogle: function () {
            this.completed = !this.completed;
        }
    };

    // leeres Objekt über Objekt-Konstruktor erzeugt
    // und Properties/Methoden dynamisch hinzugefügt
    var t2 = new Object();
    t2.txt = "IIFE";
    t2["completed"] = true;
    t2.toggle = function () {
        this.completed = !this.completed;
    };

    // leeres Objekt über Objekt-Konstruktor erzeugt
    // und Properties/Methoden dynamisch hinzugefügt
    var t3 = {};
    t3.txt = "Closures";
    t3.completed = true;
    t3.toggle = function () {
        this.completed = !this.completed;
    };

    todos.push(t1);
    todos.push(t2);
    todos.push(t3);


    // View rendering
    var lst = document.getElementById('lst1');
    var input = document.getElementById('txt1');
    var btn = document.getElementById('btn1');

    todos.forEach(function (t) {
        appendItemToList(lst, t);
    })

    btn.addEventListener('click', submitInput);
    btn.closest('form').addEventListener('submit', submitInput);

    function submitInput(ev) {
        var txt = input.value.trim();
        if (txt) {
            var todo = {
                txt: txt,
                completed: false,
                toogle: function () {
                    this.completed = !this.completed;
                }
            };
            appendItemToList(lst, todo);
            input.value = '';
        }
        ev.preventDefault();
    }

})();

(function () {

    // Layer 2 - Prototyp
    'use strict';

    // einfacher Array-Store
    var todos = [];

    var todoPrototype = {
        toogle: function toogle() { this.completed = !this.completed; }
    };

    // ES5
    var t2 = Object.create(todoPrototype);
    t2.txt = 'Layer 2';
    t2.completed = false;

    // ES 6
    var t1 = {
        txt: 'Layer 1',
        completed: true,
        __proto__: todoPrototype
    }

    window.todoPrototype = todoPrototype;

    // View rendering
    var lst = document.getElementById('lst2');
    var input = document.getElementById('txt2');
    var btn = document.getElementById('btn2');

    todos.forEach(function (t) {
        appendItemToList(lst, t);
    })

    btn.addEventListener('click', submitInput);
    btn.closest('form').addEventListener('submit', submitInput);

    function submitInput(ev) {
        var txt = input.value.trim();
        if (txt) {
            var todo = {
                txt,
                completed: false,
                __proto__: todoPrototype
            };
            appendItemToList(lst, todo);
            input.value = '';
        }
        ev.preventDefault();
    }

})();

(function () {

    // Layer 3 - Konstruktor
    'use strict';

    // einfacher Array-Store
    var todos = [];

    // Klasse: Todo
    // Konstruktor
    function Todo(txt) {
        this.txt = txt;
        this.completed = false;
    }
    Todo.prototype.toogle = function() { this.completed = !this.completed;};

    var t1 = new Todo('OOP');

    console.log(t1.__proto__ === Todo.prototype);


    // View rendering
    var lst = document.getElementById('lst3');
    var input = document.getElementById('txt3');
    var btn = document.getElementById('btn3');

    todos.forEach(function (t) {
        appendItemToList(lst, t);
    })

    btn.addEventListener('click', submitInput);
    btn.closest('form').addEventListener('submit', submitInput);

    function submitInput(ev) {
        var txt = input.value.trim();
        if (txt) {
            var todo = new Todo(txt);
            appendItemToList(lst, todo);
            input.value = '';
        }
        ev.preventDefault();
    }

})();

// global
function appendItemToList(lst, t) {

    var todoTxt = t.txt;
    var completed = t["completed"];

    var li = document.createElement('li');
    if (completed) {
        li.classList.add('completed');
    }
    li.innerHTML = todoTxt;
    li.addEventListener('click', function (ev) {
        this.classList.toggle('completed');
    });
    lst.appendChild(li);
}
