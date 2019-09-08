import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
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
            <div className="mx-auto order-0">
                <a className="navbar-brand mx-auto" href="/">Poplo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/login"><i className="fas fa-user"></i> Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register"><i className="fas fa-user-circle"></i> Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar