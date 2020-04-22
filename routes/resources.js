const express = require('express');
const router = express.Router();
const resourcesCtrl = require('../controllers/resources');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/', resourcesCtrl.index)



module.exports = router;
