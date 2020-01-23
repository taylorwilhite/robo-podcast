const {trainedNet} = require('./trained-net');


const run1 = trainedNet('Amanda: Hello');
const run2 = trainedNet('Julia: Yeah');
const run3 = trainedNet('Amanda: Dracula');
const run4 = trainedNet('Julia: Dark');

console.log('Amanda: Hello' + run1);
console.log('Julia: Yeah' + run2);
console.log('Amanda: Spot' + run3);
console.log('Julia: It' + run4);
