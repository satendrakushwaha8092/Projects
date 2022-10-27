const db = require("../models/index");
const validUrl = require("valid-url");
const shortid = require("shortid");

exports.create = async (req,data) => {
  if (validUrl.isUri(data.longUrl)) {
    const longUrl = await db.urls.findOne({where:{longUrl: data.longUrl}})
    if(longUrl) return{
        status:200,
        message:"comming from db",
        result:longUrl
    }
    const urlCode = shortid.generate();
    const domain = req.protocol + "://" + req.get("host");
    data.shortUrl = domain + "/" + urlCode;
    data.urlCode = urlCode;
    const savedata = await db.urls.create(data);
    return{
        status:201,
        message:"successful created",
        result:savedata
    }
  } else {
    return{
        status:400,
        message:"enter valid url"
    }
  }
};
