const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({

 
    Email: {
        type: String,
        required: true
    },
    Phonenumber: {
        type: String,
        required: true
    },
    Image: {
        type: String,
    },
    Role: {
        type: Number,
        required: true,
        default: 2,
    },
    password: {
        type: String,
        required: true
    },
});

const student = mongoose.model('student', studentSchema)
module.exports = student