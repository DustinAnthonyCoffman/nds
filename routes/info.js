var express = require('express');
var router = express.Router();
var infoCtrl = require('../controllers/info');

/* GET home page. */
router.get('/', infoCtrl.index);

module.exports = router;
