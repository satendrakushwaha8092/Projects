// const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//   });
  
//   promise1.then((value) => {
//     console.log(value);
//     // expected output: "Success!"
//   });
// data={
//     fname:"sa",
//     num:123
// }
// function checkMail() {
//     return new Promise((resolve, reject) => {
//       if (data.fname=="sat") {
//         resolve('data created');
//       } else {
//         reject(new Error('invalid'));
//       }
//     });
//   }
  
//   checkMail()
//     .then((mail) => console.log(mail))
//     .catch(err =>console.error(err))
//     .finally(() => {
//       console.log('Experiment completed');
//     });

const express = require('express');
const app = express();
app.use('/', 
express.Router().get("/name",function(req, res) {
    let fname=req.query.fname
    let lname=req.query.lname
    res.send(fname+lname)
}))
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
  