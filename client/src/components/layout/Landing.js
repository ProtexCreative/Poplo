import React, { Fragment } from 'react'   // Import React
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Poplo!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <Link className="btn btn-primary btn-lg" to="/register" role="button">Join Now</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Landing