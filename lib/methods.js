module.exports.MethodShell = function(funcName, params) {
    var args = [].slice.call(params);
    if(args[args.length - 1] instanceof Function){
        var cb = args.pop();
        return dispatch(args, cb);
    }
    return dispatch(funcName, args, null);
};

function dispatch(funcName, args, cb){

}