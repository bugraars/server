const mongoose = require('mongoose');

const connectDB = async () => {
    const MongoDB = process.env.MongoDB;
    try {
        await mongoose.connect(MongoDB);
    } catch (err) {
        console.log('Error connecting to MongoDB', err);
    }
}

module.exports = connectDB;
