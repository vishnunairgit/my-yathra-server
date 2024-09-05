const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    title: String,
    message: String,
    student: [{ type: mongoose.Schema.Types.ObjectId, ref: 'student' }],
    Date: { type: Date, required: true },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;



