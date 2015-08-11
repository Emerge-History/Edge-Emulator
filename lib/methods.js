var Status = require('./status');

function dispatch(funcName, args, cb) {
    if (funcName === 'RegisterEvent') {
        return cb(undefined, true);
    } else if (funcName === 'Stat.Get') {
        var k = args[0];
        return (Status.status[k]
            ? cb(undefined, Status.status[k])
            : cb(new Error('No such status.')));
    } else if (funcName === 'App.Manager.List') {
        return cb(undefined, Status.pooled);
    } else if (funcName === 'Device.Get') {
        var did = args[0];
        return cb(undefined, Status.devices[did]);
    } else if (funcName === 'Device.GetByMAC') {
        var mac = args[0];
        return cb(undefined, Status.GetDevIdByHWAddr(mac));
    } else if (funcName === 'Device.All') {
        return cb(undefined, Status.devices);
    } else if (funcName === 'Device.List') {
        var ops = args[0];
        return cb(undefined, Status.List(ops));
    } else if (funcName === 'Device.FromBus') {
        var hwaddr = args[0];
        var bus = args[1];
        return cb(undefined, Status.FromBus(hwaddr, bus));
    } else if (funcName === 'Device.Config') {
        var dev = args[0];
        var config = args[1];
        return cb(undefined, Status.Config(dev, config));
    } else if (funcName === 'Device.SetOnwership') {
        var devId = args[0];
        var ownership = args[1];
        return cb(undefined, Status.SetOwnership(devId, ownership));
    } else if (funcName === 'Edge.Traffic.Get') {
        return cb(undefined, Status.getTraffic());
    } else if (funcName === 'Edge.Wireless.Stations') {
        return cb(undefined, Status.getStations());
    } else if (funcName === 'Proxy.CurrentDevHeader'
        || funcName === 'Network.GetDeviceByIp') {
        var ip = args[0];
        return cb(undefined, Status.GetDeviceByIp(ip));
    } else if (funcName === 'User.GetOwnedDevices') {
        var userid = args[0];
        var ops = arg[1];
        return cb(undefined, Status.GetOwnedDevices(userid, ops));
    } else if (funcName === 'User.List') {
        var opts = args[0];
        return cb(undefined, Status.UserList(opts));
    } else if (funcName === 'User.All') {
        return cb(undefined, Status.UserAll());
    } else {
        return cb(undefined
            , "invoke " + funcName + " with " + JSON.stringify(args));
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