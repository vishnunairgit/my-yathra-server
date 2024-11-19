// const mongoose = require('mongoose');
// const BOOKNOW = require('../models/BookNowModels')

// exports.BookNow = async (req, res) => {
//     try {
//         const { Name, PhoneNumber, Email, Date } = req.body;

//         console.log(req.body);
        

//         // Validate if PhoneNumber is provided
//         if (!PhoneNumber) {
//             return res.status(400).json({ message: "Phone number is required." });
//         }

//         // Check if the PhoneNumber already exists
//         const existingBooking = await BOOKNOW.findOne({ PhoneNumber });
//         if (existingBooking) {
//             return res.status(400).json({ message: "Phone number must be unique." });
//         }

//         // Create new booking
//         const newBookNow = new BOOKNOW({
//             Name,
//             PhoneNumber,
//             Email,
//             Date,
//         });

//         await newBookNow.save();

//         console.log(newBookNow);
//         res.json({ message: 'Booking successfully', newBookNow });
//     } catch (error) {
//         console.error("Error while Booking:", error);

//         // If the error is related to unique constraint, catch it
//         if (error.code === 11000) {
//             return res.status(400).json({ message: "Phone number must be unique." });
//         }

//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };



const express = require('express');
const router = express.Router();
const BOOKNOW = require('../models/BookNowModels')

exports.BookNow = async (req, res) => {
    const { Name, Number, Email, Date } = req.body;

  try {
    // Check if the phone number already exists
    const existingBooking = await BOOKNOW.findOne({ Number });

    if (existingBooking) {
      return res.status(400).json({ message: "Phone number must be unique." });
    }
    const Booking = new BOOKNOW({
      Name,
      Number,
      Email,
      Date,
    });

    await Booking.save();
    res.status(200).json({ message: "Booking successful!",Booking });
  } catch (error) {
    console.error("Error booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

