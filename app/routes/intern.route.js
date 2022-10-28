const express = require('express');
const router = express.Router();
const internController = require("../controllers/intern.controller");
const { createInternRules, validate } = require('../validators/create-intern.validator');

router.post("/intern",createInternRules(), validate, internController.createInterndata)  //create college detail

router.get("/intern",internController.getInterndata)  //create intern data

module.exports = router;