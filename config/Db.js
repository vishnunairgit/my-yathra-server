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





// require('dotenv').config(); 
// const mongoose = require('mongoose');

// // Function to connect to MongoDB
// const connectToDatabase = async () => {
//     try {
//         // Connection URL (read from environment variables for security)
//         // const dbURI = 'mongodb+srv://infovishnuac:AASBdSpGdyToufQZ@myyathra.gklkj.mongodb.net/myyathra?retryWrites=false&w=majority';

//         const dbUrl = process.env.MONGODB_URL || 'mongodb+srv://infovishnuac:AASBdSpGdyToufQZ@myyathra.gklkj.mongodb.net/?retryWrites=true&w=majority&appName=myyathra';

//         // Connect to MongoDB
//         await mongoose.connect(dbUrl, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//         });

//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error.message);
//         process.exit(1); // Exit process with failure
//     }
// };

// module.exports = connectToDatabase;




require('dotenv').config(); 
const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        // Connection URL (read from environment variables for security)
        const dbUrl = 'mongodb+srv://infovishnuac:AASBdSpGdyToufQZ@myyathra.gklkj.mongodb.net/myyathra?retryWrites=false&w=majority';

        // const dbUrl = process.env.MONGODB_URL || 'mongodb+srv://infovishnuac:AASBdSpGdyToufQZ@myyathra.gklkj.mongodb.net/?retryWrites=true&w=majority&appName=myyathra';

        // Connect to MongoDB
        await mongoose.connect(dbUrl, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectToDatabase;



