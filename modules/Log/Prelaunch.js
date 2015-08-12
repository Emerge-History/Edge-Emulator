/****************/
/*   WARNING    */
//THIS LIB COMES WITH A HUUUUUUUUUUUGE COST!!!!
//
//IT'S A MUST TO DISABLE THIS DURING LAUNCH TIME
var Stack = require("./Stack");
var FileLogger = require('./FileLogger');
var hook = require('./leHook');
(function () {
    if (!CONF.IS_DEBUG || !CONF.ENABLE_FULL_LOG) {
        global.trace = global.warn = global.error = global.fatal = global.debug = global.info = function () {
            return false;
        };
        return;
    }
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
    global.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        logger.trace.apply(logger, args);
        hook.DoLog('trace', args.toString());
    };
    global.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        logger.warn.apply(logger, args);
        hook.DoLog('warn', args.toString());
    };
    global.fatal = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        logger.fatal.apply(logger, args);
        hook.DoLog('fatal', args.toString());
        FileLogger.fatal(args);
    };
    global.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        hook.DoLog('debug', args.toString());
        logger.debug.apply(logger, args);
    };
    global.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        logger.error.apply(logger, args);
        hook.DoLog('error', args.toString());
        FileLogger.error(args);
    };
    global.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var logger = log4js.getLogger(Stack.getModule());
        logger.info.apply(logger, args);
        hook.DoLog('info', args.toString());
    };
    if (CONF.LOG_LEVELS && CONF.LOG_LEVELS.length > 0) {
        var loggers = ['trace', 'warn', 'error', 'fatal', 'debug', 'info'];
        for (var i = 0, len = loggers.length; i < len; i++) {
            if (CONF.LOG_LEVELS.indexOf(loggers[i]) === -1) {
                global[loggers[i]] = function () {
                    return false;
                };
            }
        }
    }
})();
