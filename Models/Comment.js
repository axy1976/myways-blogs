const mongo = require("mongoose");

const CommentSchema = mongo.Schema({
    "email":String,
    "comment":String
});

const CommentModel = mongo.model('comments',CommentSchema,'comments');

module.exports = CommentModel;