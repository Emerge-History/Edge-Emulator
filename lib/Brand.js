var path = require("path");
var fs = require("fs");
var brands = {};
function ReloadCache(basePath, cb) {
    hotswap("BRAND_DB", function (jobCB) {
        try {
            var dirs = fs.readdirSync(basePath);
            for (var i = 0; i < dirs.length; i++) {
                if (fs.statSync(path.join(basePath, dirs[i])).isDirectory()) {
                    brands[i] = fs.readdirSync(path.join(basePath, dirs[i]));
                }
            }
            jobCB();
            cb();
        }
        catch (err) {
            console.log("Failed to refresh BrandDB Cache ! ".red, err);
            jobCB(err);
            cb(err);
        }
    });
}
exports.ReloadCache = ReloadCache;
function Brand_Search(brand, callback) {
    hotswapSafe("BRAND_DB", callback, function (done) {
        for (var i in brands) {
            var q = Fuzzy.match(i, brand, {});
            if(q) {
                done();
            }
        }
        done();
        return "";
    });
}
exports.Brand_Search = Brand_Search;
function Initialize(cb) {
    if(!global.symbol)
        return cb(new Error("should specify symbol folder at first!"));

    ReloadCache(global.symbol, function (err) {
        if (err) return cb(err);
        return cb();
    });
}
exports.Initialize = Initialize;

