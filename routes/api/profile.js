// Get the express server 
const express = require('express')
// Get express router
const router = express.Router()
const auth = require('../../middleware/auth')
// Get express validator to validate the entries 
const { check, validationResult } = require('express-validator')

const Profile = require('../../models/Profile') // Get the Profile Model
const User = require('../../models/Users')   // Get the User Model


// @route   GET api/profile/me
// @desc    get current user's profile
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])   // Get the profile with user_id and add name & avatar from user

        if (!profile) { // If no profile returned.
            return res.status(400).json({ msg: 'There is no profile for this user.' })
        }

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
})

// @route   GET api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', [auth, [
    check('status', 'Status is required.').not().isEmpty(),
    check('college', 'College is required.').not().isEmpty(),
    check('university', 'University is required.').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const {
        college,
        university,
        location,
        bio,
        website,
        status,
        youtube,
        instagram,
        facebook,
        github,
        twitter,
        linkedin
    } = req.body    // Destructure the request body

    // Create Profile Object
    const profileFields = {}
    profileFields.user = req.user.id
    if (college) profileFields.college = college
    if (university) profileFields.university = university
    if (location) profileFields.location = location
    if (bio) profileFields.bio = bio
    if (website) profileFields.website = website
    if (status) profileFields.status = status

    // Create social Object
    profileFields.social = {}
    if (youtube) profileFields.youtube = youtube
    if (twitter) profileFields.twitter = twitter
    if (facebook) profileFields.facebook = facebook
    if (linkedin) profileFields.linkedin = linkedin
    if (instagram) profileFields.instagram = instagram
    if (github) profileFields.github = github

    try {
        let profile = await Profile.findOneAndUpdate(   // Find one profile and update.
            { user: req.user.id },
            { $set: profileFields },
            { new: true, upsert: true }
        )
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
})

// @route GET api/profile
// @desc Get all profiles.
// @access Public
router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar'])  // Get all the profiles.
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
})

// @route GET api/profile/user/:user_id
// @desc Get profile by user_id
// @access Public
router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ // Get the profile from user_id.
            user: req.params.user_id    // user_id is taken from url parameter.
        }).populate('user', ['name', 'avatar'])

        if (!profile) return res.status(400).json({ msg: 'Profile not found.' })

        res.json(profile)
    } catch (err) {
        console.error(err.message)
        if (err.kind == 'ObjectId') {
            return res.status(400).json({ msg: 'Profile not found.' })
        }
        res.status(500).send('Server Error!')
    }
})

// @route DELETE api/profile
// @desc Delete profile, user & posts
// @access Private
router.delete('/', auth, async (req, res) => {
    try {
        // Remove post by User
        await Post.deleteMany({ user: req.user.id })
        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id })
        // Remove User Object from _id
        await User.findOneAndRemove({ _id: req.user.id })

        res.json({ msg: 'User deleted.' })
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error!')
    }
})



// Export route
module.exports = router