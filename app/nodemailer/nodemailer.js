var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "satykush8092@gmail.com",
    pass: "jbhlpttkubgzmccm",
  },
});
exports.nodemailer = async (otp, email) => {
  var mailOptions = {
    from: "satykush8092@gmail.com",
    to: `${email}`,
    subject: "OTP",
    text: `${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return email;
};
