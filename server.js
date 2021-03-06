var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require("body-parser");
var logger = require('morgan');
var cors = require('cors');
var jwt = require('jwt-simple');
var path = require('path');
var request = require('request');
var mongoose = require('mongoose');
var index = require('./routes/index.js')
var PORT = process.env.PORT || 3000



app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// // app.use("/", express.static("public"));
// app.use("/js", express.static("public/js"))
// app.use("/css", express.static("public/css"))
// app.use("/partials", express.static("public/partials"))
// app.use(express.static(__dirname + "views"))
// app.use(express.static(__dirname + "public"))



app.use('/', index);



app.listen(PORT, function() {
  console.log( 'listening on port ' +PORT)
})
