import axios from 'axios'   // Package to send http requests 
import {    // Redux actions import from types
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS
} from './types'
import { setAlert } from './alert'  // Redux methods
import setAuthToken from '../utils/setAuthToken'    // Method to set the token from local storage to header

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

// Register User
export const register = ({ name, username, email, password }) => async dispatch => {
    const config = {
        headers: {  // Set the headers with content type: json
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, username, email, password })    // Convert JS Object to string

    try {
        const res = await axios.post('/api/users', body, config)    // POST requset to /api/users

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())    // Load User from token
    } catch (err) {
        const errors = err.response.data.errors     // Get the errors array from response

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))    // Set alert
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
}

// Login User
export const login = (username, password) => async dispatch => {
    const config = {    // Set a config Object
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password }) // Convert JS Object to string

    try {
        const res = await axios.post('/api/auth', body, config) // POST request to /api/auth

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (err) {
        const errors = err.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: LOGIN_FAIL
        })
    }
}