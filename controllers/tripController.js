const TRIPS = require('../models/TripModels');
const mongoose = require('mongoose');

exports.Addtrip = async (req, res) => {
    try {
        const { CreatedBy, TripTitle, TripLocations, TripDuration, Flights, Hotels, Activities, TripAmount, TripDiscountAmount, Date, } = req.body;
        
        const newTrip = new TRIPS({
            CreatedBy,
            TripTitle,
            TripLocations,
            TripDuration,
            Flights,
            Hotels,
            Activities,
            TripAmount,
            TripDiscountAmount,
            Date,
            TripFile: req.files && req.files.TripFile ? req.files.TripFile[0].path : null,
        });

        await newTrip.save();

        console.log(newTrip);


        res.json({ message: 'Trip data Added successfully' });
    } catch (error) {
        console.error("Error while adding trip:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.GetTrips = async (req, res) => {
    try {
        // Fetch trips and populate the 'CreatedBy' field (user details)
        const Trips = await TRIPS.find().populate('CreatedBy', 'UserName Email'); // Optional: specify the fields to populate

        // Log the trips data to ensure you're fetching the correct data
        console.log(Trips);

        if (!Trips || Trips.length === 0) {
            return res.status(404).json({ error: 'Trips not found' });
        }

        // Send the trips data as the response
        res.status(200).json(Trips);

    } catch (error) {
        // Log the error with more context for better debugging
        console.error("Error fetching trips: ", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
