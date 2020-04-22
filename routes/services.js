const express = require('express');
const router = express.Router();
const servicesCtrl = require('../controllers/services');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/', servicesCtrl.index)



module.exports = router;
