//setup the Node server backend
var express = require('express');
path = require('path');
var bodyParser = require('body-parser');
mongoose = require('mongoose');
//setup APP
app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
//static files are used by the frontend / Angular
app.listen(8000, function() {
  console.log('8000');
});
