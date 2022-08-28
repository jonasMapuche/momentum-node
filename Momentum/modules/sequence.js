let momentum = require('../models/momentum.js');

exports.hello = (req, res) => {
    res.send('Project for sequence momentum!');
};

exports.save = (req, res) => {
    res.send({
        save: save(req.body)
    });
};

function save(val) {

    var item = val.list;

    let lista = {
        name: val.name,
        export: Date(),
        framework: val.framework,
        list: item
    };

    let malware = {
        name: val.name,
        malware: lista
    };

    let data = new momentum(malware);
    data.save();

    return val;
};
