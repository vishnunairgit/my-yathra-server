require('dotenv').config(); // Load environment variables from .env file
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


// const mongoose = require('mongoose');

// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://infovishnuac:AASBdSpGdyToufQZ@myyathra.gklkj.mongodb.net/<database>', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1);
//     }
// };

// module.exports = connectToDatabase;



require('dotenv').config(); // Load environment variables from .env file
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        const dbUrl = process.env.MONGODB_URL;
        
        if (!dbUrl) {
            throw new Error('MONGODB_URL is not defined in the environment variables.');
        }

        // Connecting to MongoDB
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectToDatabase;

