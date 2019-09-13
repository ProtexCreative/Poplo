import { SET_ALERT, REMOVE_ALERT } from '../actions/types'  // Get the action types

const initialState = []     // Set an initial State

export default function (state = initialState, action) {
    const { type, payload } = action    // Destructuring action object

    switch (type) {
        case SET_ALERT:
            return [...state, payload]  // Spread operator is used with the state object
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)
        default:
            return state
    }
}