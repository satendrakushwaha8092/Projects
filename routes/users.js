var express = require('express');
var router = express.Router();
const {createuser,login,logout,getusers,updateuser,deleteuser,forgetPassword,setPassword}=require('../controllers/userControllers')
const {userValidation,loginValidations,updateValidations}=require('../validators/userValidators')
const {validate}=require('../middlewares/validationError')
const {wrapper} = require('../utils/errorWrap');
const {auth}=require('../middlewares/auth');
const {uploadFile}=require('../utils/uploadResume')

router.post('/user',uploadFile,wrapper(createuser));
router.post('/login',loginValidations,validate,wrapper(login));
router.post('/logout',wrapper(logout));
router.get('/user',auth,getusers);
router.put('/user',auth,wrapper(updateuser));
router.delete('/user',auth,wrapper(deleteuser));
router.post('/resetPassword',wrapper(forgetPassword));
router.post('/setPassword',wrapper(setPassword));

module.exports = router;
