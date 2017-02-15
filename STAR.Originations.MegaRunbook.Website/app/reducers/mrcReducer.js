
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

export default function mrcReducer(state = initialState.user, action) {

    switch (action.type) {

        case types.GET_USER_SUCCESS:
            return action.user;

        case types.GET_LOOKUPS_SUCCESS:
            return action.lookups;

        default:
            return state;
    }
}