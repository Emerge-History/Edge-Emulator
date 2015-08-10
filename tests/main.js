if(global.EDGE) {
    console.log("in Edge Router");
    API.Network.Firewall.Config.Get("hello");
} else {
    console.log("not in Edge Router");
}