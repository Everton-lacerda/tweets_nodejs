const {Schema, model } = require('mongoose')

const TweetSchema = new Schema({
    author: String,
    content: String,
    likes: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Tweet', TweetSchema)