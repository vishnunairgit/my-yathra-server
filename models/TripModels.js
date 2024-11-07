const mongoose = require('mongoose');
const tripSchema = new mongoose.Schema({

    CreatedBy: {
        type:String,
    },

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
        default: Date.now
    },
    Hotels: {
        type: String,
    },
    Activities: {
        type: String,
    },
    TripAmount: {
        type: String,
    },
    TripDiscountAmount: {
        type: String,
    },
    TripFile: {
        type: String
    },

    status: {
        type: String,
        required: true,
        default: "active", // Use "active" or "inactive"
    },
    

    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },
    



});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip;

