const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const StartPostSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    username: {
        type: String
    }
})

module.exports = mongoose.model("StartPost", StartPostSchema);