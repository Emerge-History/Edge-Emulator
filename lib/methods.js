var Status = require('./status');
var Brand = require('./Brand');

function dispatch(funcName, args, cb) {
    funcName = funcName.toLowerCase();
    if (funcName === 'RegisterEvent'.toLowerCase()) {
        return cb(undefined, true);
    } else if (funcName === 'Stat.Get'.toLowerCase()) {
        var k = args[0];
        return (Status.status[k]
            ? cb(undefined, Status.status[k])
            : cb(new Error('No such status.')));
    } else if (funcName === 'App.Manager.List'.toLowerCase()) {
        return cb(undefined, Status.pooled);
    } else if (funcName === 'Device.Get'.toLowerCase()) {
        var did = args[0];
        return cb(undefined, Status.devices[did]);
    } else if (funcName === 'Device.GetByMAC'.toLowerCase()) {
        var mac = args[0];
        return cb(undefined, Status.GetDevIdByHWAddr(mac));
    } else if (funcName === 'Device.All'.toLowerCase()) {
        return cb(undefined, Status.devices);
    } else if (funcName === 'Device.List'.toLowerCase()) {
        var ops = args[0];
        return cb(undefined, Status.List(ops));
    } else if (funcName === 'Device.FromBus'.toLowerCase()) {
        var hwaddr = args[0];
        var bus = args[1];
        return cb(undefined, Status.FromBus(hwaddr, bus));
    } else if (funcName === 'Device.Config'.toLowerCase()) {
        var dev = args[0];
        var config = args[1];
        return cb(undefined, Status.Config(dev, config));
    } else if (funcName === 'Device.SetOnwership'.toLowerCase()) {
        var devId = args[0];
        var ownership = args[1];
        return cb(undefined, Status.SetOwnership(devId, ownership));
    } else if (funcName === 'Edge.Traffic.Get'.toLowerCase()) {
        return cb(undefined, Status.getTraffic());
    } else if (funcName === 'Edge.Wireless.Stations'.toLowerCase()) {
        return cb(undefined, Status.getStations());
    } else if (funcName === 'Proxy.CurrentDevHeader'.toLowerCase()
        || funcName === 'Network.GetDeviceByIp'.toLowerCase()) {
        var ip = args[0];
        return cb(undefined, Status.GetDeviceByIp(ip));
    } else if (funcName === 'User.GetOwnedDevices'.toLowerCase()) {
        var userid = args[0];
        var ops = arg[1];
        return cb(undefined, Status.GetOwnedDevices(userid, ops));
    } else if (funcName === 'User.List'.toLowerCase()) {
        var opts = args[0];
        return cb(undefined, Status.UserList(opts));
    } else if (funcName === 'User.All'.toLowerCase()) {
        return cb(undefined, Status.UserAll());
    } else if (funcName === 'User.Get'.toLowerCase()) {
        var userid = args[0];
        return cb(undefined, Status.UserGet(userid));
    } else if (funcName === 'User.GetState'.toLowerCase()) {
        var userid = args[0];
        return cb(undefined, Status.UserGetState(userid));
    } else if (funcName === 'User.GetCurrent'.toLowerCase()) {
        return cb(undefined, Status.UserCurrent());
    } else if (funcName === 'Message.RawQuery'.toLowerCase()) {
        var opts = args[0];
        return cb(undefined, Status.MsgRawQuery(opts));
    } else if (funcName === 'Message.Timeline'.toLowerCase()) {
        var receiver = args[0];
        var receiverType = args[1];
        var page = args[2];
        var total = args[3];
        return cb(undefined, Status.Timeline(receiver, receiverType, page, total));
    } else if (funcName === 'Message.GetNotifications'.toLowerCase()) {
        var receiver = args[0];
        var receiverType = args[1];
        var page = args[2];
        var total = args[3];
        return cb(undefined, Status.GetNotifications(receiver, receiverType, page, total));
    } else if (funcName === 'Resource.OUISearch'.toLowerCase()) {
        return cb(undefined, 'Project Edge.');
    } else if (funcName === 'Network.Firewall.Config.Get'.toLowerCase()) {
        return cb(undefined, Status.FirewallConfig());
    } else if (funcName === 'Network.Wifi2G.Config.Get'.toLowerCase()) {
        return cb(undefined, Status.Wlan2gConfig());
    } else if (funcName === 'Network.Wifi5G.Config.Get'.toLowerCase()) {
        return cb(undefined, Status.Wlan5gConfig());
    } else if (funcName === 'Network.Bluetooth.Config.Get'.toLowerCase()) {
        return cb(undefined, Status.BluetoothConfig());
    } else if (funcName === 'User.UpdateAvatar'.toLowerCase()) {
        var userid = args[0];
        var avatar = args[1];
        Status.UpdateUserAvatar(userid, avatar);
        return cb(undefined);
    } else if (funcName === 'User.UpdateData'.toLowerCase()) {
        var userid = args[0];
        var data = args[1];
        Status.UpdateUserData(userid, data);
        return cb(undefined);
    } else if (funcName === 'Resource.SymbolSearch'.toLowerCase()) {
        var brand = args[0];
        if(global.symbol)
            return Brand.Brand_Search(brand, function (err, res) {
                return cb(err, res);
            });
        else
            return cb(new Error("should specify symbol folder at first!"));
    } else if (funcName === 'App.QueryIntentions'.toLowerCase()) {
        var intention = args[0];
        Status.QueryIntentions(intention, function (err, responses) {
            return cb(undefined, responses);
        });
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