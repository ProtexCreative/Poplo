import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = () => {
    // const authLinks = (
    //     <ul>
    //         <li><Link to="#!">Home</Link></li>
    //         <li><Link to="#!">Events</Link></li>
    //         <li><Link to="#!">Updates</Link></li>
    //         <li><Link to="#!">MatchR</Link></li>
    //         <li><Link to="#!">BrooX</Link></li>
    //         <li><Link to="#!">Notification</Link></li>
    //         <li><Link to="#!">Profile</Link></li>
    //     </ul>
    // )

    // const guestLinks = (
    //     <ul>
    //         <li><Link to="#About">About</Link></li>
    //         <li><Link to="#About">Developers</Link></li>
    //         <li><Link to="#About">Contact</Link></li>
    //         <li><Link to="#About">Login</Link></li>
    //         <li><Link to="#About">Register</Link></li>
    //     </ul>
    // )

    // return (
    //     <nav className="navbar">
    //         <h1>
    //             <Link to="/">
    //                 Poplo
    //             </Link>
    //         </h1>
    //         {(
    //             <Fragment>{guestLinks}</Fragment>
    //         )}
    //     </nav>
    // )

    return (
        <h1>
            Navbar
        </h1>
    )
}

export default Navbar