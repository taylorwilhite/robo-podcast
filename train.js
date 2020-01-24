const brain = require('brain.js');
const {transcripts} = require('./transcripts');
const fs = require('fs');

const buildData = (data) => {
  let output = []
  for (let i = 1; i < data.length; i++) {
    output.push({input: data[i - 1], output: data[i]})
  }

  return output;
};

const trainingData = buildData(transcripts);

const net = new brain.recurrent.LSTM();
const result = net.train(trainingData, {
  iterations: 10000,
  log: details => console.log(details),
  errorThresh: 0.025
});

fs.writeFileSync('trained-net.js', `exports.trainedNet = ${ net.toFunction().toString() };`);