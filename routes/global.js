const express = require('express');
const router = express.Router();
const globalCtrl = require('../controllers/global');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/', globalCtrl.index)



module.exports = router;
