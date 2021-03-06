const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    post: { type: String, required: true },
    imageUrl: { type: String, required: false },
    likes: { type: Number, required: false },
    dislikes: { type: Number, required: false },
    usersLiked: { type: Array, required: false },
    usersDisliked: { type: Array, required: false },
});

module.exports = mongoose.model('Post', postSchema);