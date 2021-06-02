var mongoose = require('mongoose'); 

var userSchema = mongoose.Schema({
    
    email: {
       type: String,
       required: true,
    },
    password: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    userName: {
        type: String
    },
    adminName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    createdOn: { type: String, default : function NOW(){
        return new Date(new Date +" UTC").toISOString().slice(0, 19).replace('T', ' ');
    }}

});

var userModel = module.exports = mongoose.model('user', userSchema);