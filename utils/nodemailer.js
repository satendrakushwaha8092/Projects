var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "satykush8092@gmail.com",
    pass: "jbhlpttkubgzmccm",
  },
});
exports.sendMail = async (to,subject,data) => {
  var mailOptions = {
    from: "satykush8092@gmail.com",
    to: `${to}`,
    subject: `${subject}`,
    text: `${data}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return
};