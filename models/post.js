const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
    bcrypt = require('bcrypt');

const postSchema = new Schema({
    image: {type: String},
    title: {type: String},
    content: {type: String}
}, {timestamps: true})


module.exports = mongoose.model('Post', postSchema);
module.exports = postSchema;