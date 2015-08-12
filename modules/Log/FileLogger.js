var fs = require('fs'), path = require('path'), Stack = require('./Stack'), child_process = require('child_process');
function TwoDigitalize(number) {
    return (number < 10 ? '0' + number.toString() : number.toString());
}
function NumericDate(date) {
    var str = date.getFullYear() + TwoDigitalize(date.getMonth() + 1) + TwoDigitalize(date.getDate());
    return Number(str);
}
function writeLog(level) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!CONF.LOG_TO_FILE || !args)
        return;
    var stack = Stack.getModule(3);
    var now = new Date();
    var prefix = path.join(dir, now.getFullYear() + '' + TwoDigitalize(now.getMonth() + 1));
    var time = now.getFullYear() + '-' + TwoDigitalize(now.getMonth() + 1) + '-' + TwoDigitalize(now.getDate())
        + ' ' + TwoDigitalize(now.getHours()) + ':' + TwoDigitalize(now.getMinutes()) + ':' + TwoDigitalize(now.getSeconds());
    var data = '[' + level + '] - ' + time + ' : [' + stack + '] ' + args.join('\t') + '\n';
    child_process.exec('mkdir -p ' + prefix, function (err) {
        if (err)
            return console.log(err);
        var file = path.join(prefix, NumericDate(now) + '.log');
        fs.appendFile(file, data);
    });
}
var level = {
    debug: 'DEBUG',
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR',
    tarce: 'TRACE',
    fatal: 'FATAL',
    uncaught: 'UNCAUGHT',
    domainerr: 'DOMAINERR'
};
var dir = path.join(process.env.ROOT_PATH || __dirname, "logs");
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.debug, args);
}
exports.debug = debug;
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.info, args);
}
exports.info = info;
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.warn, args);
}
exports.warn = warn;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.error, args);
}
exports.error = error;
function tarce() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.tarce, args);
}
exports.tarce = tarce;
function fatal() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.fatal, args);
}
exports.fatal = fatal;
function uncaught() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.uncaught, args);
}
exports.uncaught = uncaught;
function domainerr() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return writeLog(level.domainerr, args);
}
exports.domainerr = domainerr;
