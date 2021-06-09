const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    jwt: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
})

module.exports = mongoose.model('auths', authSchema);