const express = require("express");
require("dotenv").config();  // To load environment variables from .env file
const connectDB = require("./config/db");  // Path to your MongoDB connection file
const apiRoutes = require("./routes/api");  // Your API routes

// Set the port to the one from .env or fallback to 3001 if not set
const PORT = process.env.PORT || 3001;

const app = express();

// Establish a connection to the database
connectDB();

// Middleware
app.use(express.static(`${__dirname}/client/build`)); // Serve static files from client/build (for production)
app.use(express.json({ limit: "1mb" }));  // JSON body parser with a 1mb limit

// API Routes
app.use("/api", apiRoutes);  // All routes starting with "/api" will be handled by apiRoutes

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
