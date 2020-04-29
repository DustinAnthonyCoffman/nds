const express = require('express');
const router = express.Router();
const commercialCtrl = require('../controllers/commercial');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/', commercialCtrl.index)



module.exports = router;
