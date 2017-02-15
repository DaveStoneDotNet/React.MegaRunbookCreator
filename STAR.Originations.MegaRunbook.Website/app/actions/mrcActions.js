
import MrcApi                           from '../api/MrcApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as types                       from './actionTypes';

// An action describes user intent.

// 1) Store gets notified of action.
// 2) Store sends action to reducers.
// 3) Reducers accept state and return new state.

// Action Creators... returning a plain javascript object which must have a 'type' property.
// Once an action is created, you need a function which will 'handle' that action, and that's where reducers come in.
// Reducers are just functions which accept a state and an action and returns a new state.

export function getUserSuccess(user)        { return { type: types.GET_USER_SUCCESS,      user:    user    }; }
export function getLookupsSuccess(lookups)  { return { type: types.GET_LOOKUPS_SUCCESS,   lookups: lookups }; }

// ---

export function getUser() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getUser()
                     .then(response => { dispatch(getUserSuccess(response)); })
                     .catch(error   => { throw(error); }); 
    };
};

export function getLookups() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getLookups()
                     .then(response => { dispatch(getLookupsSuccess(response)); })
                     .catch(error   => { throw(error); }); 
    };
};

