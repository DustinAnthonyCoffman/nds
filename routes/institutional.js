var express = require('express');
var router = express.Router();
var institutionalCtrl = require('../controllers/institutional');

/* GET home page. */
router.get('/', institutionalCtrl.index);

module.exports = router;
