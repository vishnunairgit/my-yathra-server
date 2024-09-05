const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    UserName: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String,
    },
    RegistrationNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: String,
        required: true
    },
    Address: {
        type: String,
    },
    Website: {
        type: String
    },
    LinkedIn: {
        type: String
    },
    Industry: {
        type: String
    },
    Incorporationdate: {
        type: Date,
    },
    About: {
        type: String,
    },
    Logo: {
        type: String,
    },
    Image: {
        type: String,
    },
    Role: {
        type: Number,
        required: true,
        default: 1,
    },
    password: {
        type: String,
        required: true
    },
});

const users = mongoose.model('users', userSchema)
module.exports = users