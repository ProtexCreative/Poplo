import React, { Fragment } from 'react'   // Import React
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to="/home" />
    }

    return (
        <Fragment>
            <div className="container">

                <section>
                    <div className="jumbotron">
                        <h1 className="display-4">Welcome to Poplo!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <Link className="btn btn-primary btn-lg" to="/register" role="button">Join Now</Link>
                    </div>
                </section>

                <section id="about">
                    <h1>About</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>

                <section id="developers">
                    <h1>Developers</h1>
                    <p className="lead">
                        <ul id="devs">
                            <li>Harshal</li>
                            <li>Pratik</li>
                            <li>Karan</li>
                            <li>Kaif</li>
                        </ul>
                    </p>
                </section>

                <section id="contact">
                    <h1>Contact</h1>
                    <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, quis!</p>
                </section>

                <section id="tag center">
                    <p>
                        <h4>© Protex Creative</h4>
                    </p>
                </section>

            </div>
        </Fragment>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)