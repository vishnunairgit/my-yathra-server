
const mongoose = require('mongoose');
const tripSchema = new mongoose.Schema({
    TripTitle: {
        type: String,
    },
    TripLocations: {
        type: String,
    },
    TripDuration: {
        type: String,
    },
    Flights: {
        type: String,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Hotels: {
        type: String,
    },
    Activities: {
        type: String,
    },
    TripAmount: {
        type: Number,  // Updated to Number
    },
    TripDiscountAmount: {
        type: Number,  // Updated to Number
    },
    TripType: {
        type: String,
    },
    TripFile: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: "active",
    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        // Ensure 'users' matches your user model name
        required: true,
        // type: String,
    },
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;
