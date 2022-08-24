const sequence = require('../modules/sequence.js');

exports.hello = sequence.hello;

exports.index2 = (req, res) => {
    res.send('Index Express 2');
};

exports.save = sequence.save;