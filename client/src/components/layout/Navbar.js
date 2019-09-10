import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#!"><i className="fas fa-profile"></i>{' '}<span className="hide-sm">{}</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={logout} href="#!"><i className="fas fa-sign-out-alt"></i>{' '}<span className="hide-sm">Logout</span></a>
            </li>
        </ul>
    )

    const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/login"><i className="fas fa-user"></i> Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/register"><i className="fas fa-user-circle"></i> Register</a>
            </li>
        </ul>
    )

    const smLinks = (
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#developers">Developers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#contact">Contact</a>
                </li>
            </ul>
        </div>
    )

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            {!loading && (<Fragment>{document.title === 'Poplo' ? smLinks : ''}</Fragment>)}
            <div className="mx-auto order-0">
                <a className="navbar-brand mx-auto" href="/">Poplo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)