var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require("body-parser");
var logger = require('morgan');
var mongoose = require('mongoose');



app.use("/", express.static("public"));
app.use("/js", express.static("public/js"))
app.use("/css", express.static("public/css"))
