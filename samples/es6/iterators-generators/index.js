
var teilnehmer = {
    anzahl: 2,
    names: ['Alex', 'Natalie']
}

teilnehmer.names.fehlen = 6;

for( const p in teilnehmer) {
    console.log(p);
}

for (const n in teilnehmer.names) {
    console.log(teilnehmer.names[n]);
}

for( const n of teilnehmer.names) {
    console.log(n);
}

// for( const n of teilnehmer) {
//     console.log(n);
// }

// Iterator-Protokoll
function makeIterator() {
    let ix = 0;
    var liste = this;
    return {
        next() {
            return ix < liste.anzahl ? {
                    value: liste.names[ix++],
                    done: false
                } : {
                    value: undefined, done: true
                };
        }
    }
}

teilnehmer.makeIt = makeIterator;

const it = teilnehmer.makeIt();
let elt =it.next();
while( elt.done != true)
{
    console.log(elt.value);
    elt = it.next();
}

//teilnehmer[Symbol.iterator] = makeIterator;


function * createIt() {
    for( const n of this.names ) {
        yield n;
    }
}

teilnehmer[Symbol.iterator] = createIt;
for( const n of teilnehmer) {
    console.log(n);
}

function *  numbers () {
    yield 1;
    yield 2;
    yield 13;
}

function * createItDelegate() {
    yield * this.names;
}

function * nonIterations () {
    console.log("First it");
    yield 1;
    console.log("Last It");
}

