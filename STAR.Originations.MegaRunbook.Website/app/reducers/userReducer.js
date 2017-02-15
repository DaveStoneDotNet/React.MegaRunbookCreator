
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

// Reducers are simple functions that accept state and actions and return a new state.
// All reducers are called when an action is dispatched.

export default function userReducer(state = initialState.user, action) {

    switch (action.type) {

        case types.GET_USER_SUCCESS:
            return action.user;

        default:
            return state;
    }
}