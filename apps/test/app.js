var express = require('express');
var path = require('path');
var logger = require('morgan');
var vhost = require('vhost');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};

app.use(logger('dev'));
app.use(allowCrossDomain);

app.get("/", function(req, res){
    res.end("HELLO TEST!");
});

module.exports = app;
