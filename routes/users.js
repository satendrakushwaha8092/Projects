var express = require('express');
var router = express.Router();
const file = require('../controller/uploadFile')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/upload', file.uploadFile);

router.post('/data', file.readData);

router.post('/dataxl', file.readXL);

router.get('/download', file.getuploaddata);

router.post('/create',file.create);

//router.get('/resume/:name', file.get);



module.exports = router;
