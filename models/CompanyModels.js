const mongoose = require('mongoose')

const companySchema = mongoose.Schema({


    CompanyName: {
        type: String,
    },
   
    Email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
        match: /.+\@.+\..+/ // Basic email format validation

    },

    Phonenumber: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // Example: Validate 10-digit phone numbers
    },

    Address: {
        type: String,
    },

    Instagram: {
        type: String,
        // match: /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_.]+$/ // Instagram profile URL pattern
    },

    FaceBook: {
        type: String,
        // match: /^(https?:\/\/)?(www\.)?facebook\.com\/[a-zA-Z0-9_.]+$/ // Facebook profile URL pattern
    },

    About: {
        type: String,
    },

    logoFile: {
        type: String,
    },
    
    imageFile: {
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

const Company = mongoose.model('Company', companySchema); // Updated to singular, capitalized form
module.exports = Company;