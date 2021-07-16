const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    cid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    id: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
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
},
{
    versionKey: false
});

module.exports = mongoose.model('comments', commentSchema);