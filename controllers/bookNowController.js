const mongoose = require('mongoose');
const BOOKNOW = require('../models/BookNowModels')

exports.BookNow = async (req, res) => {
    try {
        const { UserName, UserPhoneNumber, userEmail, Date  } = req.body;
        console.log(req.body,"-----userdata");
        
        // Create new booking
        const newBooing = new BOOKNOW({
            UserName,
            UserPhoneNumber,
            userEmail,
            Date,
        });

        await newBooing.save();
        res.status(201).json({ message: 'Booking successfully', newBooing });

        console.log(newBooing,"----------new boking---------------");

    } catch (error) {
        console.error("Error while Booking:", error);

        // If the error is related to unique constraint, catch it
        if (error.code === 11000) {
            return res.status(400).json({ message: "Phone number must be unique." });
        }

        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// const mongoose = require('mongoose');
// const BOOKNOW = require('../models/BookNowModels');

// exports.BookNow = async (req, res) => {
//   try {
//     const { UserName, UserPhoneNumber, userEmail, Date } = req.body;
//     console.log(req.body,"--------req.body-------");
    

//     // Validate request body
//     // const validationError = validateBooking(req.body);
//     // if (validationError) {
//     //   return res.status(400).json({ message: validationError });
//     // }

//     // Create new booking
//     const newBooking = new BOOKNOW({
//       UserName,
//       UserPhoneNumber,
//       userEmail,
//       Date,
//     });

//     await newBooking.save();
//     console.log(newBooking,"00000000000000000");
    

//     res.status(201).json({ message: 'Booking successful', newBooking });
//   } catch (error) {
//     console.error('Error while Booking:', error);

//     // Mongoose validation error
//     if (error.name === 'ValidationError') {
//       return res.status(400).json({ message: 'Invalid request data' });
//     }

//     // Unique constraint error
//     if (error.code === 11000) {
//       return res.status(400).json({ message: 'Phone number must be unique' });
//     }

//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

