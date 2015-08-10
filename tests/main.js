if(global.EDGE) {
    console.log("in Edge Router");
    API.App.Manager.List(function(err, res){
        if(err) return console.log(err);
        return console.log(res);
    });
} else {
    console.log("not in Edge Router");
}