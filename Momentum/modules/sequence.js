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
    /*
    const item = new Array(item1 = {
        name: val.list[0].name,
        rank: val.list[0].rank,
        check: val.list[0].check,
        description: val.list[0].description
    });
    */
    let lista = {
        name: val.name,
        export: Date(),
        framework: val.framework
    };

    let malware = {
        name: val.name,
        malware: lista
    };
    let data = new momentum(malware);
    data.save();

    return val;
};
