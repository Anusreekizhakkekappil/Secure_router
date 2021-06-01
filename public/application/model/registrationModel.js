const userCollectionModel = require('../../libs/db/mongoDBModel/userCollection');

/// Insert Data
exports.insert = function(data, cb) {
    userCollectionModel.insert(data, function(err, result) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, result);
        }
    });
}

exports.finduserByEmail = function(value, cb) {

    var query = { email: value.email };
    //console.log(query);

    userCollectionModel.find(query, function(err, result) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, result);
        }
    });
}