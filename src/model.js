const mongoose = require("mongoose");

const postSchema = require("./postschema")

const Post = mongoose.model("Post", postSchema);

module.exports = Post;