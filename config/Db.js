require('dotenv').config();
const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        // const dbUrl = process.env.MONGODB_URL;
        const dbUrl = process.env.MONGODB_URL || 'mongodb+srv://infovishnuac:c6OnStRwRE6FeT1W@myyathra.dshod.mongodb.net/?retryWrites=true&w=majority&appName=myyathra';
        if (!dbUrl) {
            throw new Error('MONGODB_URL is not defined in the environment variables.');
        }

        const connection = await mongoose.connect(dbUrl);
        console.log('my yathra MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectToDatabase;
