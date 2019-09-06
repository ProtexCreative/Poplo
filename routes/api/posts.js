// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()

// @route   GET api/posts
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Posts Route'))

// Export route
module.exports = router