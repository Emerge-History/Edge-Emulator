var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var _port = "/tmp/fdsock/webex";
var methods = require('../lib/methods');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/", function (req, res) {
    res.json({
        result: "welcome"
    });
});
app.post("*", function (req, res) {
    var p = req.path.toLowerCase();
    var d = p.trim().replace(/\//gim, '.');
    while (d[0] === '.') {
        d = d.substr(1);
    }
    while (d[d.length - 1] === '.') {
        d = d.substr(0, d.length - 1);
    }
    console.log('Web EX Call: ' + d);
    if (!global.API_JSON.f[d]) {
        return res.json({
            error: 'Not Found'
        });
    }
    else {
        console.log(req.body);
        var params = [];
        if (req.body) {
            for (var i in req.body) {
                try {
                    params.push(JSON.parse(req.body[i]));
                }
                catch (e) {
                    params.push(req.body[i]);
                }
            }
        }
        params.push(must(function (err, result) {
            if (err) {
                return res.json({
                    error: err.message ? err.message : err,
                    stack: err.stack ? err.stack : []
                });
            }
            else {
                return res.json({
                    result: result
                });
            }
        }, 20000));

        try {
            methods.MethodShell(d, params);
        }
        catch (e) {
            params[params.length - 1](e);
        }
    }
});

function Initialize(cb) {
    console.log("Initializing WebEX");
    app.listen(_port, function () {
        exec("chmod", "777", _port);
        cb();
    });
}
exports.Initialize = Initialize;