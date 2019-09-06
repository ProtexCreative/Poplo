const mongoose = require('mongoose')    // Get Mongoose.

// Create Profile Schema
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    college: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    social: {
        instagram: {
            type: String
        },
        facebook: {
            type: String
        },
        twitter: {
            type: String
        },
        linkedin: {
            type: String
        },
        youtube: {
            type: String
        },
        github: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Export Profile Model
module.exports = Profile = mongoose.model('profile', ProfileSchema)
