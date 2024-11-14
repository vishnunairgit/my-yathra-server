const TRIPS = require('../models/TripModels');
const mongoose = require('mongoose');

exports.Addtrip = async (req, res) => {
    try {
        const { CreatedBy, TripTitle, TripLocations, TripDuration, Flights, Hotels, Activities, TripAmount, TripDiscountAmount,TripType, Date, } = req.body;

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
            TripType,
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



exports.GetSingleTrip = async (req, res) => {

    const { tripId } = req.params;

    console.log(tripId, '--------tripIdBE--------------');

    try {
        const trip = await TRIPS.findById(tripId);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }
        res.status(200).json(trip);
        console.log(trip);

    } catch (error) {
        console.error("Error fetching single trip:", error);
        res.status(500).json({ error: 'Server error' });
    }
};


exports.EditTrip = async (req, res) => {

    const { tripId } = req.params;
    const updateTrip = req.body;

    console.log(tripId, '-----------tripid--------');
    console.log(updateTrip, "------updatedata----------");

    try {

        if (req.files && req.files.TripFile) {
            updateTrip.TripFile = req.files.TripFile[0].path; // Handle file path correctly
        }
        const trip = await TRIPS.findByIdAndUpdate(tripId, updateTrip, { new: true })
        if (!trip) {
            return res.status(400).json({ message: "Trip not fount" })
        }
        res.status(200).json({ message: "Trip data Updated successfully", trip });
        console.log(trip);

    } catch (error) {
        res.status(500).json({ message: 'Error updating job', error });

    }

}


exports.DeleteTrip = async (req, res) => {
    const { tripId } = req.params;
    try {
        const Trip = await TRIPS.findByIdAndDelete(tripId);
        if (!Trip) {
            return res.status(404).json({ message: "Trip not found" })
        }
        res.status(200).json({ message: 'Trip deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting job', error });
    }
}