const mongoose = require('mongoose');
const UserType = require('../enums/UserType');

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
        required: this.type === UserType.personal
    },
    lastName:{
        type: String,
        required: this.type === UserType.personal
    },
    companyName: {
        type: String,
        required: this.type === UserType.company
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