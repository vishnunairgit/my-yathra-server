const mongoose = require('mongoose')

const companySchema = mongoose.Schema({


    CompanyName: {
        type: String,
    },
   
    Email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
    },

    Phonenumber: {
        type: String,
        required: true
    },

    Address: {
        type: String,
    },

    Instagram: {
        type: String
    },

    FaceBook: {
        type: String
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

const User = mongoose.model('User', companySchema); // Updated to singular, capitalized form
module.exports = User;