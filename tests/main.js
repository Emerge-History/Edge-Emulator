if(global.EDGE) {
    console.log("in Edge Router");
    API.Driver.Invoke("hello");
} else {
    console.log("not in Edge Router");
}