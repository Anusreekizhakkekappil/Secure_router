const userCollectionModel = require('../../libs/db/mongoDBModel/userCollection');

exports.finduserForLogin = function(value, cb) {
    if (value.asAdmin == true) {
        var query = { email: value.email, password: value.password, userType: 'admin' };
    } else {
        var query = { email: value.email, password: value.password, userType: 'user' };
    }
    //console.log(query);

    userCollectionModel.find(query, function(err, result) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, result);
        }
    });
}