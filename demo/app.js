var express = require("express");
var path = require("path");
var favicon = require('serve-favicon');
var logger = require("morgan");
var bodyParser = require('body-parser');
var key = UUIDstr(), app = express();
app.use(favicon('./favico.ico'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
global.css = [
    "bootstrap.min.css",
    "auxico.css",
    "common.css",
    "entypo.css",
    "font-awesome.min.css"
];
app.use("/", require("./router/index"));
app.use("/landscape", require("./router/landscape"));
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err["status"] = 404;
    next(err);
});
//function Initialize(port, cb) {
//    console.log("Starting Launcher Server @" + port);
//    app.listen(port, cb);
//}
module.exports = app;

global.Server.on('request', app);