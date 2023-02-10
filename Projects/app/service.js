const db = require("../models/index");
const validUrl = require("valid-url");
const shortid = require("shortid"); //npm install express mongoose shortid valid-url
const redis = require("redis");
const { promisify } = require("util");
const redisClient = require("../utils/redis");

const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);

exports.create = async (req, data) => {
  if (Object.keys(data).length == 0)
    return {
      status: 400,
      message: "please enter long url",
    };

  if (!data.longUrl)
    return {
      status: 400,
      message: "longUrl is required",
    };

  if (validUrl.isUri(data.longUrl)) {
    const longUrl = await db.urls.findOne({ where: { longUrl: data.longUrl } });
    if (longUrl)
      return {
        status: 200,
        message: "comming from db",
        result: longUrl,
      };

    const urlCode = shortid.generate();
    const domain = req.protocol + "://" + req.get("host");
    data.shortUrl = domain + "/" + urlCode;
    data.urlCode = urlCode;
    const savedata = await db.urls.create(data);
    return {
      status: 201,
      message: "successful created",
      result: savedata,
    };
  } else {
    return {
      status: 400,
      message: "enter valid url",
    };
  }
};

exports.getUrl = async (req, res) => {
  try {
    const urlCode = req.params.urlCode;
    if (redisClient.connected) {
      let urlData = await GET_ASYNC(`${req.params.urlCode}`);
      console.log(urlData)
      let data = JSON.parse(urlData);
      if (urlData) {
        console.log("found in redis");
        return res.status(302).redirect(data.longUrl);
      }
    }

    const url = await db.urls.findOne({
      where: { urlCode: urlCode },
    });
    if (!url)
      return res.status(404).send({ status: false, message: "not found" });
    if (redisClient.connected) {
      await SET_ASYNC(`${urlCode}`, JSON.stringify(url));
      // const expireDate = new Date();
      // redisClient.expireat(`${urlCode}`, parseInt(expireDate.getTime() / 1000));
    }

    res.status(301).redirect(url.longUrl);
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};
