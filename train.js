const brain = require('brain.js');
const {transcripts} = require('./transcripts');
const fs = require('fs');

const trainingData = transcripts;

const net = new brain.recurrent.LSTM();
const result = net.train(trainingData, {
  iterations: 1500,
  log: details => console.log(details),
  errorThresh: 0.065
});

fs.writeFileSync('trained-net.js', `exports.trainedNet = ${ net.toFunction().toString() };`);