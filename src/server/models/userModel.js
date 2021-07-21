const mongoose = require('mongoose');
const UserType = require('../enums/UserType');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    ownerId: {
        type: String,
        required: this.type === UserType.company
    },
    password: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: this.type === UserType.company
    },
    firstName: {
        type: String,
        required: this.type === UserType.personal
    },
    lastName: {
        type: String,
        required: this.type === UserType.personal
    },
    address: {
        line1: String,
        city: String,
        province: String,
        postalCode: String,
        country: String,
        required: this.type === UserType.company
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    type: {
        type: String,
        enum: UserType,
        default: UserType.personal,
        required: true
    }
},
{
    versionKey: false
});

module.exports = mongoose.model('users', userSchema);