var mongodb = require('mongodb');
var mongoose = require('mongoose');
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
    mongoose.connect(url, { useNewUrlParser: true });
    const db = mongoose.connection;
    //db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    const CompletedSchema = new mongoose.Schema(
        {
            type: { type: String, enum: ['course', 'classroom'], required: true },
            parentslug: { type: String, required: true },
            slug: { type: String, required: true },
            userid: { type: String, required: true }
        },
        { collection: collectionName }
    );

    //CompletedSchema.index({ slug: 1, userid: 1 }, { unique: true })

    const model = mongoose.model(dbName, CompletedSchema);

    return val;
};

function saveMongoDB(val) {
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
