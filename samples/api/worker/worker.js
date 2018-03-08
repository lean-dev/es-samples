
// WorkerGlobalScope
console.log("Worker Global: ", self === this );

console.log('Loading external scripts ...');
self.importScripts('node_modules/crypto-js/crypto-js.js');

console.log('Ready to work with ', CryptoJS);

const actions = {
    hash,
    hello: helloWorld
}

self.addEventListener('message', async (msg) => {

    const action = msg.data.action;
    const id = msg.data.payload.id;
    const txt = msg.data.payload.text;
    const algo = msg.data.payload.algo || 'HmacSHA512';

    const result = await actions[action](txt, algo);

    self.postMessage( { id, result });

});


async function hash(pw, algo) {
    let hash = pw;
    for (let i = 0; i < 20001; i++ ) {
        hash = CryptoJS[algo](hash,'seed').toString();
    }
    return hash;
};

function helloWorld() {

}
