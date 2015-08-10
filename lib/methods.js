var Status = require('./status');

function dispatch(funcName, args, cb) {
    if (funcName === 'RegisterEvent') {
        return cb(undefined, true);
    } else if (funcName === 'Stat.Get') {
        var k = args[0];
        return (Status.status[k]
            ? cb(undefined, Status.status[k])
            : cb(new Error('No such status.')));
    } else if(funcName === 'App.Manager.List'){
        return cb(undefined, Status.pooled);
    } else {
        return cb("invoke " + funcName + " with " + JSON.stringify(args));
    }
}

module.exports.MethodShell = function (funcName, params) {
    var args = [].slice.call(params);
    if (args[args.length - 1] instanceof Function) {
        var cb = args.pop();
        return dispatch(funcName, args, cb);
    }
    return dispatch(funcName, args, null);
};