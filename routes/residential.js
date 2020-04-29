const express = require('express');
const router = express.Router();
const residentialCtrl = require('../controllers/residential');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/', residentialCtrl.index)



module.exports = router;
