const mongoose = require('mongoose');
const BOOKNOW = require('../models/BookNowModels')
const COMPANY = require('../models/CompanyModels');
const NOTIFICATION = require("../models/Notification")
 

exports.BookNow = async (req, res) => {
    try {
        const { UserName, UserPhoneNumber, userEmail, Date: bookingDate   } = req.body;
        // console.log(req.body,"-----userdata");
        
        // Create new booking
        const newBooking = new BOOKNOW({
            UserName,
            UserPhoneNumber,
            userEmail,
            Date: bookingDate,
        });
        await newBooking.save();


        const company = await COMPANY.find({ Role: "1" });
        
        
        const companyIds = company.map(company => company._id);


        const notification = new NOTIFICATION({
            title: 'New Booking',
            message: `A new booking has been made by ${newBooking.UserName}. Phone Number: ${newBooking.UserPhoneNumber}, Email: ${newBooking.userEmail}`,
            company: companyIds, // Link notification to relevant companies
            Date: new Date(),
        });

        await notification.save(); // Save the notification



        // Respond with success message and created booking
        res.status(201).json({ 
            message: 'Booking successfully created.',
            booking: newBooking,
            notification,
        });

        // console.log(newBooing,"----------new boking---------------");

    } catch (error) {
        console.error("Error while Booking:", error);

        // If the error is related to unique constraint, catch it
        if (error.code === 11000) {
            return res.status(400).json({ message: "Phone number must be unique." });
        }

        res.status(500).json({ message: 'Internal Server Error' });
    }
};

