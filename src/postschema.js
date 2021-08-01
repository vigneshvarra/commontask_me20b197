const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
    "title" : {
        type: String,
        minlength: 2,
        required: true
    },
    "description" : {
        type: String,
        minlength: 2,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = postSchema