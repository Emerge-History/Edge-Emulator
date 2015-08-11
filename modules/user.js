var child_process = require("child_process");
var fs = require("fs");

function ClearGenerated(cb) {
    List(function (err, users) {
        if (err)
            return cb(err, undefined);
        async.each(users, function (u, cb) {
            if (u.username.length === 32) {
                Delete(u.username, cb);
            }
            else {
                cb(undefined, {});
            }
        }, cb);
    });
}
exports.ClearGenerated = ClearGenerated;
function Create(username, group, shell, cb) {
    var cb = cb || function () { };
    var useraddOpts = [];
    if (group)
        useraddOpts = useraddOpts.concat(['-G', group]);
    if (shell && shell !== "")
        useraddOpts = useraddOpts.concat(['-s', shell]);
    else
        useraddOpts = useraddOpts.concat(['-s', "/dev/null"]);

    useraddOpts.push(username);
    var cmd = 'useradd';
    console.log("ADD");
    console.log(useraddOpts);
    var passwd = child_process.spawn(cmd, useraddOpts);
    passwd.on('exit', function (code, signal) {
        cb(code);
    });
}
exports.Create = Create;
function Delete(username, cb) {
    var cb = cb || function () { };
    var cmd = 'deluser';
    var args = [username];
    var passwd = child_process.spawn(cmd, args);
    passwd.on('exit', function (code, signal) {
        cb(code);
    });
}
exports.Delete = Delete;
function Get(username, cb) {
    List(function (err, users) {
        if (err) {
            return cb(err, null);
        }
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.username == username) {
                cb(undefined, user);
                return;
            }
        }
        ;
        cb(undefined, null);
    });
}
exports.Get = Get;
function List(cb) {
    fs.readFile('/etc/passwd', function (err, users) {
        if (err) {
            cb(err, undefined);
        }
        else {
            cb(undefined, users
                .toString()
                .split('\n')
                .filter(function (user) {
                    return user.length && user[0] != '#';
                })
                .map(function (user) {
                    var fields = user.split(':');
                    return {
                        username: fields[0],
                        password: fields[1],
                        userId: Number(fields[2]),
                        groupId: Number(fields[3]),
                        name: fields[4] ? fields[0] : fields[4],
                        homedir: fields[5],
                        shell: fields[6]
                    };
                }));
        }
    });
}
exports.List = List;

function EnsureCreateUser (username, cb) {
    Get(username, function(err, user){
        if(err) return console.log(err);
        if(!user) {
            Create(username, 'nogroup', undefined, function(err, result){
                if(err) return console.log(err);
                Get(username, function(err, user){
                    if(err) return console.log(err);
                    return cb(undefined, user);
                });
            });
        } else
            return cb();
    });
}
exports.EnsureCreateUser = EnsureCreateUser;
