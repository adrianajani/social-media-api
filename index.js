const express = require('express');
const mongooseConnection = require('./config/connection');
const apiRoutes = require('./routes'); // Ensure this path is correct

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and routes setup
app.use(express.json()); // Example middleware for parsing JSON
app.use('/api', apiRoutes); // Use the router for API routes

mongooseConnection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

mongooseConnection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongooseConnection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Attempt to connect to MongoDB
mongooseConnection.once('open', () => {
  console.log('Mongoose connection opened');
});