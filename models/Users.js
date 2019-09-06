// Get Mongoose
const mongoose = require('mongoose')

// Create User Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Export the User Model
module.exports = User = mongoose.model('User', UserSchema)