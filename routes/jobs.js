var express = require('express');
var router = express.Router();
const {createJob,getJob,updateJob,deleteJob}=require('../controllers/jobControllers')
const {jobValidation}=require('../validators/jobValidators')
const {validate}=require('../middlewares/validationError')
const {wrapper} = require('../utils/errorWrap');

router.post('/job',jobValidation,validate,wrapper(createJob));
router.get('/job',wrapper(getJob));
router.put('/job/:id',wrapper(updateJob));
router.delete('/job/:id',wrapper(deleteJob));


module.exports = router;
