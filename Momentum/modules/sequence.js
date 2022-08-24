var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority"
var dbName = "letterDB";
var collectionName = "activity";

exports.hello = (req, res) => {
    res.send('Project for sequence momentum!');
};

exports.save = (req, res) => {
    res.send({
        save: save(req.body)
    });
};

function save(val) {
    mongoClient.connect(url, function (err, database) {
        if (err) throw err;
        const db = database.db(dbName);
        //const collection = db.collection(collectionName);
        db.createCollection(collectionName, function (error, response) {
            if (err) throw err;
            database.close();
        });
    });
    return val;
};
