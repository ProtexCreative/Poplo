// Get the express package
const express = require('express')
// Get the db.js from config 
// db as well as db.js is OK to write
const connectDB = require('./config/db')

// Create an app from express
const app = express()

// Connect to MongoDB
connectDB()

// Initialize Middleware
app.use(express.json({ extended: false }))

// GET request to API
app.get('/', (req, res) => res.send('API running'))

// Define routes 
app.use('/api/users', require('./routes/api/users'))    // This will make '/api/users' pertain to '/' as defined in './routes/api/users.js'
app.use('/api/profile', require('./routes/api/profile'))    // This will make '/api/profile' pertain to '/' as defined in './routes/api/profile.js'
app.use('/api/auth', require('./routes/api/auth'))    // This will make '/api/auth' pertain to '/' as defined in './routes/api/auth.js'
app.use('/api/posts', require('./routes/api/posts'))    // This will make '/api/posts' pertain to '/' as defined in './routes/api/posts.js'

// Get the environment port variable
// If no port variable available, it will work on port 5000
const PORT = process.env.PORT || 5000

// Listen to the PORT
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
