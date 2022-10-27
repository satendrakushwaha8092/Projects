const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes=require('./app/routes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',routes);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});