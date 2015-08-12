var FileLogger = require('./FileLogger');
var hook = require('./leHook');
(function () {
    var ns = {};
    var delimiter = ":";
    hook.Passthrough('stderr', process.stderr);
    var log4js = require('log4js');
    log4js.configure({
        appenders: [
            {
                type: 'console',
                layout: {
                    type: 'pattern',
                    pattern: "%[%d{ABSOLUTE} %c%] %m"
                }
            }
        ]
    });
    function LOG(name, sw) {
        var d = Math.random();
        global[d] = GetLogger(name, sw);
        var scheisse = "global['" + d + "']";
        var payload = "";
        for (var t in global[d]) {
            payload += "var " + t + " = " + scheisse + "[\'" + t + "\'];";
        }
        payload += "delete " + scheisse + ";";
        return payload;
    }
    function GetLogger(moduleName, sw) {
        moduleName = moduleName.toLowerCase();
        if (sw === undefined)
            sw = !!global.LOG_VISIBLE;
        Turn(moduleName, sw, true);
        var logger = {};
        logger.trace = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName)) {
                var logger = log4js.getLogger(moduleName);
                logger.trace.apply(logger, args);
                hook.DoLog('trace', args.toString());
            }
        };
        logger.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName)) {
                var logger = log4js.getLogger(moduleName);
                logger.warn.apply(logger, args);
                hook.DoLog('warn', args.toString());
            }
        };
        logger.fatal = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName) || global.LOG_SEE_FATAL) {
                var logger = log4js.getLogger(moduleName);
                logger.fatal.apply(logger, args);
                hook.DoLog('fatal', args.toString());
                FileLogger.fatal(args);
            }
        };
        logger.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName)) {
                var logger = log4js.getLogger(moduleName);
                hook.DoLog('debug', args.toString());
                logger.debug.apply(logger, args);
            }
        };
        logger.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName) || global.LOG_SEE_ERROR) {
                var logger = log4js.getLogger(moduleName);
                logger.error.apply(logger, args);
                hook.DoLog('error', args.toString());
                FileLogger.error(args);
            }
        };
        logger.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (__isOn(moduleName)) {
                var logger = log4js.getLogger(moduleName);
                logger.info.apply(logger, args);
                hook.DoLog('info', args.toString());
            }
        };
        return logger;
    }
    function __isOn(moduleName) {
        var nodes = moduleName.toLowerCase().split(delimiter);
        var cur = ns;
        for (var i = 0, len = nodes.length; i < len; i++) {
            var n = nodes[i];
            if (!cur[n])
                return false;
            cur = cur[n];
            if (cur.hasOwnProperty("sw") && cur.sw === false)
                return false;
        }
        return true;
    }
    function Turn(moduleName, sw, pretend) {
        var nodes = moduleName.toLowerCase().split(delimiter);
        var cur = ns;
        for (var i = 0, len = nodes.length; i < len; i++) {
            var n = nodes[i];
            if (!cur[n])
                cur[n] = {};
            cur = cur[n];
            if (i === len - 1) {
                if (!pretend || cur.sw === undefined) {
                    cur.sw = sw;
                }
            }
        }
    }
    global.LOG = LOG;
    global.GetLogger = GetLogger;
    global.Turn = Turn;
})();
