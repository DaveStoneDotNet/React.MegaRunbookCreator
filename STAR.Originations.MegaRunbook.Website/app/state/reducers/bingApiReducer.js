
import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function bingApiReducer(state = initialState.bingApiData, action) {

    let new_state;

    switch (action.type) {

        case types.GET_BING_AUTHORIZATION_TOKEN_SUCCESS:
            console.log('BING REDUCER', action.authorizationToken);
            new_state = Object.assign({}, state, { authorizationToken: action.authorizationToken });
            return new_state;

        default:
            return state;
    }
}