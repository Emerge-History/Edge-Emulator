if(global.EDGE) {
    console.log("in Edge Router");
    API.Stat.Get("NETWORK", function(err, res){
        if(err) return console.log(err);
        return console.log(res);
    });
} else {
    console.log("not in Edge Router");
}