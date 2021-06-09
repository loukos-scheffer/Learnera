const mongoose = require('mongoose');

const threadSchema = new mongoose.Schema({
    tid:{
        type: String,
        required: true,
        unique: true,
        index: true
    },
    uid: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    likes:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('threads', threadSchema);