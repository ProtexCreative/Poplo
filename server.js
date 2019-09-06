// Get the express package
const express = require('express')
// Get the db.js from config 
// db as well as db.js is OK to write
const connectDB = require('./config/db')

// Create an app from express
const app = express()

// Connect to MongoDB
connectDB()

// GET request to API
app.get('/', (req, res) => res.send('API running'))

// Get the environment port variable
// If no port variable available, it will work on port 5000
const PORT = process.env.PORT || 5000

// Listen to the PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
