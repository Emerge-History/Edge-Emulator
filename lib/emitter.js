module.exports.EmitTask = function() {
    if (global.API_JSON && global.EMIT) {
        for(var i in global.API_JSON.e) {
            global.EMIT(i, "aloha", "hawaii")
        }
    }
}