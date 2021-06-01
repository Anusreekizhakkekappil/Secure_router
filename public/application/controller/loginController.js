const loginModel = require('../models/loginModel');
var validator = require("email-validator");

exports.loginUser = function(req, res) {

    if (req.body.email == null || req.body.password == null || req.body.asAdmin == null ||
        req.body.email === "" || req.body.password === "" || req.body.asAdmin === "") {

        res.send("values not given");
    } else {

        var value = {};
        value.emailVerify = validator.validate(req.body.email);

        if (value.emailVerify == true) {

            value.email = req.body.email;
            value.password = req.body.password;
            value.asAdmin = req.body.asAdmin;

            loginModel.finduserForLogin(value, function(err, cb) {

                if (err) {

                    res.status(200).send("Error in database");
                } else {

                    res.send(cb);
                }
            });
        } else {
            res.status(200).send("Write a correct email");
        }
    }
}