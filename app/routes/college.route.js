const express = require('express');
const router = express.Router();  //calling router method
const collegeController = require("../controllers/college.controller");  //importing collge controller files
const { createCollegeRules, validate } = require('../validators/create-college.validator');  //imporing college validations

router.post("/college", createCollegeRules(), validate, collegeController.createCollegedata)  //create college detail

router.get("/college/:id", collegeController.getCollegedata)  //get college detail by id with interns

module.exports = router;  //exporting router