const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from .env file
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err.message);
    process.exit(1); // Exit the process if connection fails
  }
};

module.exports = connectDB;

