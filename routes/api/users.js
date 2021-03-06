// Get the express server 
const express = require('express')
// Get express router to implement requests
const router = express.Router()
// Get express validator to validate the entries 
const { check, validationResult } = require('express-validator')
// Get gravatar to get the profile avatar
const gravatar = require('gravatar')
// Get bcrypt to hash the password
const bcrypt = require('bcryptjs')
// Get jsonwebtoken
const jwt = require('jsonwebtoken')

// Get the User Model
const User = require('../../models/Users')
// Get the config file
const config = require('config')

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [
    check('name', 'Name is required.').not().isEmpty(), // Name should not be empty.
    check('email', 'Please enter a valid Email.').isEmail(),    // Email should be properly formatted.
    check('password', 'Please enter a password with 6 or more characters.').isLength({ min: 6 }),   // Password should be of a minimum length. 
    check('username', 'Username should be lowercase.').isLowercase()    // Username should be lowercase.
], async (req, res) => {
    const errors = validationResult(req)    // Get all the errors from the request using validationResult

    if (!errors.isEmpty()) {    // If the errors array is not empty.
        return res.status(400).json({ errors: errors.array() })     // Output the errors array.
    }

    const { name, email, username, password } = req.body    // Destructure the req.body Object

    try {
        let user = await User.findOne({ email })    // Get the user from the email.

        if (user) {     // If the user exists.
            return res.status(400).json({ errors: [{ msg: 'User Email already exists.' }] })
        }

        user = await User.findOne({ username })    // Get the user from the email.

        if (user) {     // If the user exists.
            return res.status(400).json({ errors: [{ msg: 'Username already exists.' }] })
        }

        const avatar = gravatar.url(email, {    // Get the gravatar url from email.
            s: '200',   // Size.
            r: 'pg',    // Not nude.
            d: 'mm'     // Get default image.
        })

        user = new User({   // Create a user object.
            name,
            email,
            password,
            username,
            avatar
        })

        const salt = await bcrypt.genSalt(10)   // Get a salt to encrypt.

        user.password = await bcrypt.hash(password, salt)   // Convert the password to hash.

        await user.save()   // Save the user object.

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