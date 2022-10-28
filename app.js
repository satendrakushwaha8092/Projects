const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes=require('./app/routes/user.routes')
const bookroutes=require('./app/routes/book.routes')
const reviewroutes=require('./app/routes/review.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes);
app.use('/',bookroutes);
app.use('/',reviewroutes);

app.get('/test', (req,res) => {
    console.log(req)
    console.log(originalUrl)
    res.send("ok")
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});