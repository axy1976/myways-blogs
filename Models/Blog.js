const mongo = require("mongoose");

const BlogSchema = mongo.Schema({
    "title":String,
    "image":String,
    "description":String
});

const BlogModel = mongo.model('blogs',BlogSchema,'blogs');

module.exports = BlogModel;