import uuid from 'uuid' // Universal Unique ID
// Package to generate unique ID
import { SET_ALERT, REMOVE_ALERT } from './types'   // Get the SET_ALERT, REMOVE_ALERT from types file

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4()    // Get a Unique ID from Version 4 of uuid
    dispatch({  // dispatch method is used to dispatch a method to the store
        type: SET_ALERT,    // Set the action type
        payload: { msg, alertType, id } // Set a payload
    })

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)    // Set Timeout Perform an action after sometime
}