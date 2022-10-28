const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const coolgeroutes=require('./app/routes/book.routes')
const internroutes=require('./app/routes/review.routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',coolgeroutes);
app.use('/',internroutes);

app.get('/test', (req,res) => {
    console.log(req)
    console.log(originalUrl)
    res.send("ok")
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});