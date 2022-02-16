const mongoose = require('mongoose');

//unqiue on usuername and password
const PostUser = mongoose.Schema({
    username: {
        type: String,
        required: true,
        // unique: true,
        // dropDups: true,
        // sparse: true
    },
    password: {
        type: String,
        required: true,
        // unique: true,
        // dropDups: true,
        // sparse: true
    }
})

module.exports = mongoose.model('PostUser', PostUser)