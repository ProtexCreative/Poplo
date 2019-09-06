// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()

// @route   GET api/profile
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Profile Route'))

// Export route
module.exports = router