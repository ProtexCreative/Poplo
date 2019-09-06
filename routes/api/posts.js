// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()

// @route   GET api/post
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Post Route'))

// Export route
module.exports = router