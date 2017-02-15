
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

// Reducers are simple functions that accept state and actions and return a new state.
// All reducers are called when an action is dispatched.

export default function userReducer(state = initialState.lookups, action) {

    switch (action.type) {

        case types.GET_LOOKUPS_SUCCESS:
            return action.lookups;

        default:
            return state;
    }
}