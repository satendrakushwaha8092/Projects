var express = require('express');
var router = express.Router();
const {wrapper} = require('../utils/errorWrap');
const {create,get}=require('../controllers/applyJobsControllers')
const {auth}=require('../middlewares/auth');

router.post('/apply',auth,wrapper(create));
router.get('/apply',auth,wrapper(get));


module.exports = router;
