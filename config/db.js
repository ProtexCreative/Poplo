// Get the mongoose package which acts as a layer between the MongoDB and Express Server
const mongoose = require('mongoose')

// Config is a package that stores global variable || We need mongoURI string from the config/default.js
const config = require('config')
// get the mongoURI from config/default.js
const db = config.get('mongoURI')

// Function to perform connection to MongoDB
// The function returns a promise
// try catch block used as a real time error can come up
// async await used as it looks more clean than '.then'
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            // A depcrecation warning was passed to the terminal || It is in response to that.
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log("MongoDB Connected ...")
    } catch (err) {
        // Error message is printed
        console.log(err.message)

        // Process exits with a failure
        process.exit(1)
    }
}

// Export the module to be imported to other modules
module.exports = connectDB