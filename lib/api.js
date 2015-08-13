var events = require('events');
var methods = require('./methods');

var apiJson = {
    "f": {
        "Hello": 0,
        "RegisterEvent": 1,
        "Stat.Get": 2,
        "Sandbox.SetupReverseAPI": 3,
        "IO.Quota.Stat": 4,
        "IO.Quota.Raise": 5,
        "App.Manager.GetQuota": 6,
        "App.Manager.SetQuota": 7,
        "App.Manager.Load": 8,
        "App.Manager.List": 9,
        "Device.Change": 10,
        "Driver.Invoke": 11,
        "Driver.GetDescription": 12,
        "Device.Get": 13,
        "Device.GetByMAC": 14,
        "Device.All": 15,
        "Device.List": 16,
        "Device.FromBus": 17,
        "Device.Config": 18,
        "Device.GetCurrent": 19,
        "Device.SetOnwership": 20,
        "Network.CheckNameAvailability": 21,
        "Network.SetDNSHostname": 22,
        "Network.SetUdhcpc": 23,
        "Network.SetPPPD": 24,
        "Edge.Traffic.Get": 25,
        "Edge.Wireless.Stations": 26,
        "Edge.Wireless.WPS": 27,
        "Edge.Wireless.WPSCancel": 28,
        "Edge.Wireless.BTLE.Write": 29,
        "Edge.Wireless.BTLE.Read": 30,
        "Edge.Wireless.BTLE.RSSI": 31,
        "Edge.Wireless.BTLE.Connect": 32,
        "Edge.Wireless.BTLE.Disconnect": 33,
        "Launcher.Login": 34,
        "Launcher.Register": 35,
        "Launcher.Logout": 36,
        "Launcher.Renew": 37,
        "User.GetOwnedDevices": 38,
        "User.List": 39,
        "User.All": 40,
        "User.Get": 41,
        "User.GetState": 42,
        "User.GetCurrent": 43,
        "Proxy.GetTarget": 44,
        "Launcher.SetupPort": 45,
        "Proxy.AuthUser": 46,
        "Proxy.SelfTest": 47,
        "Proxy.CurrentDevHeader": 48,
        "Network.GetDeviceByIp": 49,
        "IO.CreateWebFD": 50,
        "Thirdparty.Primary": 51,
        "Thirdparty.Aux": 52,
        "Thirdparty.Clear": 53,
        "Thirdparty.Owned": 54,
        "Persist": 55,
        "Message.Touch": 56,
        "Message.SendNotification": 57,
        "Message.SendTimeline": 58,
        "Message.RawQuery": 59,
        "Message.Timeline": 60,
        "Message.GetNotifications": 61,
        "Resource.OUISearch": 62,
        "Resource.SymbolSearch": 63,
        "IO.CreateFD": 64,
        "IO.ReadFD": 65,
        "Port.Release": 66,
        "Port.List": 67,
        "Port.ListByOwner": 68,
        "Port.Exist": 69,
        "Port.Map": 70,
        "Network.Firewall.Config.Get": 71,
        "Network.Wifi2G.Config.Get": 72,
        "Network.Wifi5G.Config.Get": 73,
        "Network.Bluetooth.Config.Get": 74,
        "User.UpdateAvatar": 75,
        "User.UpdateData": 76,
    },
    "e": {
        "Stat.set": 0,
        "Stat.del": 1,
        "Device.change": 2,
        "Driver.down": 3,
        "Driver.up": 4,
        "Driver.reload": 5,
        "Device.down": 6,
        "Device.up": 7,
        "Edge.Wireless.BTLE.connect": 8,
        "Edge.Wireless.BTLE.disconnect": 9,
        "User.up": 10,
        "User.down": 11,
        "User.onlineDeviceChanged": 12,
        "Port.release": 13
    }
};

function _containsAPI(funcName){
    funcName = funcName.toLowerCase();
    for(var i in apiJson.f) {
        if(funcName == i.toLowerCase())
            return true;
    }
    return false;
}

function _get_API(api_skeleton) {
    var _API_Endpoint = {};
    _API_Endpoint.event_lookup = new Array(Object.keys(api_skeleton.e).length);
    _API_Endpoint.Destroy = (function () {
        _API_Endpoint.event_lookup = undefined;
        while (_API_Endpoint.event_tracker.length > 0) {
            (_API_Endpoint.event_tracker.pop()).removeAllListeners();
        }
        _API_Endpoint.event_tracker = undefined;
        _API_Endpoint.API = undefined;
    });

    var API = new events.EventEmitter();
    var _event_tracker = [API];

    for (var i in api_skeleton.e) {
        //i = API.System.Device.on("DummyEvent");
        //i = API.System.Device.DummyEvent
        var d = i.split('.');
        //recur gen func tree
        //console.log(d);
        var cur = API;
        if (d.length > 1) {
            //Device.change
            //[]
            for (var t = 0; t < d.length - 1; t++) {
                if (!cur[d[t]]) {
                    cur[d[t]] = new events.EventEmitter();
                    _event_tracker.push(cur[d[t]]);
                }
                cur = cur[d[t]];
            }
        }
        var event_name = d[d.length - 1] + "";
        _API_Endpoint.event_lookup[api_skeleton.e[i]] = {emitter: cur, name: event_name};
    }

    for (var i in api_skeleton.f) {
        //i = API.System.Device.DummyFunc
        var d = i.split('.');
        //recur gen func tree
        //console.log(d);
        var cur = API;
        for (var t = 0; t < d.length - 1; t++) {
            if (!cur[d[t]]) {
                cur[d[t]] = {} //Considerable?
                //_event_tracker.push(cur[d[t]]);
            }
            cur = cur[d[t]];
        }
        cur[d[d.length - 1]] = (function (i) {
            return function () {
                methods.MethodShell(i, arguments);
            }
        })(i);
    }

    _API_Endpoint.API = API;
    _API_Endpoint.event_tracker = _event_tracker;
    return _API_Endpoint;
}

var api_endpoint = _get_API(apiJson);

function _event_emit(eventName, paramArray) {
    var event_id = apiJson.e[eventName];
    if (event_id) {
        if (api_endpoint.event_lookup && api_endpoint.event_lookup[event_id] &&
            api_endpoint.event_lookup[event_id].emitter && api_endpoint.event_lookup[event_id].name) {
            (api_endpoint.event_lookup[event_id].emitter).emit.apply(
                (api_endpoint.event_lookup[event_id].emitter),
                [
                    api_endpoint.event_lookup[event_id].name
                ].concat(paramArray));
        }
    }
}

module.exports.API = api_endpoint.API;
module.exports.API_JSON = apiJson;
module.exports.EMIT = _event_emit;
module.exports.ContainsAPI = _containsAPI;

