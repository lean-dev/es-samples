
// ES6 introducing constants (lexically scoped, see es6/scope sample)

const e = Math.E;
const topic = 'ES6 Constants';
const primes = [2, 3, 5, 7, 11, 13, 15];
const me = {
    firstname: 'Michael',
    lastname: 'Alt'
};
const fn = function() {};

// Important: constant is the reference! Referenced objects are not constant.

me.firstname = 'Micha';
primes[6] = 17;
primes.push(19);

// Following results in errors

// topic = "ES6 constants are not constant";
// e = 2.72;
// fn = console.log;
// primes = [2,3];
// me = {};


