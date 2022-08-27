const mongoose = require('mongoose');
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
const momentum = require('../models/momentum.js');
const malware = require('../models/malware.js');

exports.hello = (req, res) => {
    res.send('Project for sequence momentum!');
};

exports.save = (req, res) => {
    res.send({
        save: save(req.body)
    });
};

function save(val) {
    mongoose.connect(url, { useNewUrlParser: true });
    const db = mongoose.connection;
    const database = "letterDB";
    const collection = db.model(database, momentum);

    const item = new Array(item1 = {
        name: val.list[0].name,
        rank: val.list[0].rank,
        check: val.list[0].check,
        description: val.list[0].description
    });

    const lista = {
        name: val.name,
        export: Date(),
        framework: val.framework,
        list: item
    };

    const malware = {
        name: val.name,
        malware: lista
    };
    const data = new collection(malware);
    data.save();

    return val;
};
