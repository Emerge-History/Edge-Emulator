var express = require('express');
var path = require('path');
var logger = require('morgan');
var vhost = require('vhost');

module.exports = function (staticPath) {
    var app = express();

    app.use(logger('dev'));
    app.use(express.static(staticPath));
    return app;
}