const brain = require('brain.js');
const data = require('../data/data.json');
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input : item.text,
    output : item.outputText
}));

network.train(trainingData,{
    iterations : 2000
});
module.exports =  {
    output : (input) => {
        return network.run(input);
    }
}