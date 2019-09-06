const jwt = require('jsonwebtoken') // Get the jsonwebtoken.
const config = require('config')    // Get the config file.


module.exports = function (req, res, next) {    // It takes req, res object and next
    const token = req.header('x-auth-token')    // Get the token from the header.

    if (!token) {   // If no token exists.
        return res.status(401).json({ msg: 'No token. Authorization denied.' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))  // Decode the token.

        req.user = decoded.user // Get the user from the decoded token.
        next()  // Iterate to next middleware, if exists.
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid.' })
    }
}