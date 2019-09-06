// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Auth Route'))

// Export route
module.exports = router