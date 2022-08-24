'use strict';
var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller.js');

router.get('/', controller.hello);
router.get('/all', controller.hello);
router.post('/', controller.save);

module.exports = router;
