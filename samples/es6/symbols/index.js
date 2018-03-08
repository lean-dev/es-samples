
class StateWatcher {

    set(obj, prop, value) {

        if( prop in obj ) {

            if ( value !== obj[prop]) {
                obj[prop] = value;
                Object.defineProperty(obj, StateWatcher.Modified, {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: 'Modified'
                });
            }

        }
    }

    get(obj, prop) {

        return prop in obj ? obj[prop] : 'Nix';
    }

}
StateWatcher.Modified = Symbol("sw.modified");

const w = new StateWatcher();

var person = {id:1, fname: 'Klaus', lname: 'Fischer'};

var p = new Proxy(person, w);
