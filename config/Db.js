// require('dotenv').config(); 
// Load environment variables from .env file
// const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//     try {
//         const dbUrl = process.env.MONGODB_URL;
//         if (!dbUrl) {
//             throw new Error('MONGODB_URL is not defined in the environment variables.');
//         }
//         const connection = await mongoose.connect(dbUrl);
//         console.log('my yathra MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//     }
// }

// module.exports = connectToDatabase;






require('dotenv').config();
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        // Get the MongoDB URI from environment variables
        const dbUrl = process.env.MONGODB_URL;

        // Connect to MongoDB with necessary options
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,     // Ensures the new URL parser is used
            useUnifiedTopology: true, // Ensures the new server discovery and monitoring engine is used
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure if the connection fails
    }
};

module.exports = connectToDatabase;









