const mongoose = require('mongoose');

const pagination = require('mongoose-paginate-v2');
const postSchema = new mongoose.Schema({
    //_id : String,
    post: String,
    username: String,
    like: String,
    comment: String,
    share: String
});

postSchema.plugin(pagination);
module.exports = mongoose.model('posts', postSchema);
