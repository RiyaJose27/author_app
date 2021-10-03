const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
//     title: String,
//     price: Number,
//     description: String
// })
    name: {
        type: String,
        required: [true, "must have a title!"],
        minLength: [5, "need at least 5 characters"]
    },

    description: {
        type: String,
        required: [true, "must have a description!"],
        minLength: [8, "need at least 3 characters"]
    }
}, {timestamps: true})



const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;