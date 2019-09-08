import React, { Fragment, useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const { username, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {

    }

    return (
        <Fragment>
            <h1>Login</h1>
            <form>
                <div class="form-group">
                    <label >Username</label>
                    <input type="text" class="form-control" name='username' value={username} onChange={e => onChange(e)} placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={password} onChange={e => onChange(e)} placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </Fragment>
    )
}

export default Login