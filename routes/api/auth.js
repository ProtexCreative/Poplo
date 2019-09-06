// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()
// Get jsonwebtoken
const jwt = require('jsonwebtoken')
// Get bcrypt to hash the password
const bcrypt = require('bcryptjs')
// Get express validator to validate the entries 
const { check, validationResult } = require('express-validator')
// Get the config file
const config = require('config')
const auth = require('../../middleware/auth')   // Get the auth middleware.

const User = require('../../models/Users')

// @route   POST api/auth
// @desc    Authenticate user & get Token
// @access  Public
router.post('/', [
    check('password', 'Password is required.').exists(),   // Password should be of a minimum length. 
    check('username', 'Username should be lowercase.').isLowercase()    // Username should be lowercase.
], async (req, res) => {
    const errors = validationResult(req)    // Get all the errors from the request using validationResult

    if (!errors.isEmpty()) {    // If the errors array is not empty.
        return res.status(400).json({ errors: errors.array() })     // Output the errors array.
    }

    const { username, password } = req.body    // Destructure the req.body Object

    try {
        let user = await User.findOne({ username })    // Get the user from the username.

        if (!user) {     // If the user exists.
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] })
        }

        const isMatch = await bcrypt.compare(password, user.password)   // Compare the entered plain password with the hashed password in the database.

        if (!isMatch) {   // If password does not match.
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials.' }] })
        }

        const payload = {   // Create a payload object to send in token.
            user: {
                id: user.id     //  Get the id from user object.
            }
        }

        // TODO: Change the expiration time at the time of production.
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000000 },     // Sign the token, set the jwtSecret, set an expiration time of token
            (err, token) => {
                if (err) throw err  // If error available, throw error.
                res.json({ token })     // Response object will have a token.
            })
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
})

// Export route
module.exports = router