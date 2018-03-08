
const worker = new Worker('worker.js');
const worker2 = new Worker('worker.js');

worker.onmessage = function(msg) {console.log(msg.data)};
worker2.onmessage = function(msg) {console.log(msg.data)};


const pw = 'geheim';

worker.postMessage(
    { action: 'hash', payload: { text: pw, id: 1 } }
);
worker2.postMessage(
    { action: 'hash', payload: { text: pw, id: 2, algo: 'MD5' } }
);
