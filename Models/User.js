const mongo = require("mongoose");

const UserSchema = mongo.Schema({
    "fullname":String,
    "email":String,
    "phoneno":String,
    "password":String
});

const UserModel = mongo.model('users',UserSchema,'users');

module.exports = UserModel;