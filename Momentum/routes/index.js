'use strict';
let express = require('express');
let router = express.Router();
const controller = require('../controllers/controller.js');

const mongoose = require('mongoose');
const url = "mongodb+srv://jonas:freedown@cluster0.28oko.azure.mongodb.net/letterDB?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

router.get('/', controller.hello);
router.get('/all', controller.hello);
router.post('/', controller.save);

module.exports = router;
