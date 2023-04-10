const fs = require("fs");
const csv = require("fast-csv");
var parse = require("csv-parse");
const reader = require("xlsx");
const db = require("../models/index");
const json2xls = require("json2xls");
const json = require("json");
const { Op } = require("sequelize");

exports.uploadFile = async (req, res, next) => {
  const data = req.body;
  let files = req.files;
  if (files && files.length > 0) {
    const fileName = Date.now();
    fs.writeFileSync(`./public/uploads/${fileName}.xlsx`, req.files[0].buffer);
    const response = await db.file_upload.create({
      filename: fileName,
      mimetype: files[0].mimetype,
      originalname: files[0].originalname,
      encoding: files[0].encoding,
      userId: req.userData,
    });
    return res.send({ message: "file uploaded", result: response });
  } else {
    return res.status(400).send({ msg: "file is required" });
  }
};

exports.readData = async (req, res, next) => {
  try {
    var csvData = [];
    fs.createReadStream(req.body.path)
      .pipe(parse({ delimiter: ":" }))
      .on("data", function (csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);
      })
      .on("end", function () {
        //do something with csvData
        console.log(csvData);
      });
  } catch (err) {
    res.send(err.message);
  }
};

exports.readXL = async (req, res) => {
  // Reading our test file
  const file = reader.readFile(req.body.path);

  let data = [];

  const sheets = file.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);

    console.log(Object.keys(temp[0]));
    temp.forEach((res) => {
      data.push({
        mode: res["Branch FDGL Code"],
        branchName: res["Branch Name"],
        saleId: res["Sale Id"],
        customerId: res["Customer Id"],
        employeeId: res["Employee Id"],
        customerName: res["Customer Name"],
        sellRate: res["Sell Rate"],
        vendorRate: res["Vendor Rate"],
        augmontTransactionID: res["Augmont Transaction ID"],
        gst: res["GST"],
        weight: res["Weight (Gms)"],
        paidAmount: res["Paid Amount"],
        transactionDateTime: res["Transaction Date & Time"],
        invoiceNumber: res["Invoice Number"],
        invoiceDate: res["Invoice Date"],
        fileId: req.body.fileId,
        status: "fail",
      });
    });
  }

  const response = await db.tempdata.bulkCreate(data);
  if (response.length == data.length)
    res.send("all data uploaded successfully");
};

exports.getuploaddata = async (req, res, next) => {
  try {
    const search = req.query;
    console.log(search);
    const response = await db.tempdata.findAll({
      where: { [Op.or]:[{status: search}, {fileId: search}] },
    });
    //console.log(response)
    const jsonArray = [];
    response.forEach(function (instance, indexx, record) {
      var tempArry = {
        "Branch FDGL Code": record[indexx]["mode"],
        ColoumnName2: record[indexx]["branchName"],
        "Customer Id": record[indexx]["customerId"],
        ColoumnName4: record[indexx]["saleId"],
        status: record[indexx]["status"],
      };
      jsonArray.push(tempArry);
    });
    //console.log(jsonArray)
    // jsonArray.sort(function(a, b) {
    //     return parseFloat(b.ColoumnName4) - parseFloat(a.ColoumnName4);
    // });
    const xls = json2xls(jsonArray);
    const fileName = Date.now();
    fs.writeFileSync(`./public/downloads/${fileName}.xlsx`, xls, "binary");
    res.download(`./public/downloads/${fileName}.xlsx`);
  } catch (err) {
    res.send(err.message);
  }
};

exports.create = async (req, res) => {
  try {
    const data = req.body;
    let files = req.files;

    if (files && files.length > 0) {
      const fileName = Date.now();
      fs.writeFileSync(
        `./public/uploads/${files[0].originalname}`,
        req.files[0].buffer
      );
      console.log(files[0]);
    }
    data.resume = `./uploads/${files[0].originalname}`;
    const response = await db.users.create(data);
    res.send(response);
  } catch (err) {
    res.send(err.message);
  }
};
