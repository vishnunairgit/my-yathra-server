const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    companies: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', // Assuming your company collection is named 'Company'
        required: true 
    }],
    Date: { 
        type: Date, 
        required: true 
    },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;





