const mongoose = require('mongoose')

const bookNowSchema = mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
    },
    Number: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
});

const BookNow = mongoose.model('BookNow', bookNowSchema);
module.exports = BookNow;
