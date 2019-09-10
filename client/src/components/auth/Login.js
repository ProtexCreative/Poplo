import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'

const Login = ({ login }) => {
    // document.title = `Poplo: ${React.Component}`;

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        login(username, password)
    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" name='username' value={username} onChange={e => onChange(e)} placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name='password' value={password} onChange={e => onChange(e)} placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <div className="form-group">
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
            </form>

        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login)