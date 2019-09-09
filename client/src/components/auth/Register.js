import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, username, password, password2 } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        if (password != password2) {
            setAlert('Passwords do not match.', 'danger', 5000)
        } else {
            console.log(formData)
        }
    }

    return (
        <Fragment>
            <h1>Register</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <label >Full Name</label>
                    <input type="text" className="form-control" name='name' value={name} onChange={e => onChange(e)} placeholder="Enter Full Name" required />
                </div>
                <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" name='username' value={username} onChange={e => onChange(e)} placeholder="Enter username" required />
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={email} onChange={e => onChange(e)} placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={e => onChange(e)} placeholder="Password" />
                </div>
                <div className="form-group">
                    <label >Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name='password2' value={password2} onChange={e => onChange(e)} placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">I agree to the terms and conditions. <Link to="#">Read T&C</Link></label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </Fragment>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired
}

export default connect(null, { setAlert })(Register)