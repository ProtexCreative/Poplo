// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()
const auth = require('../../middleware/auth')   // Get the auth middleware.

const User = require('../../models/Users')

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')   // Get the user from the id stored in token. Ignore password.
        res.json(user)  // Print the user.
    } catch (err) {
        console.error(err.message)
    }
})

// Export route
module.exports = router