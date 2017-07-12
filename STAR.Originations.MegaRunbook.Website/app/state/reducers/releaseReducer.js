
import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function releaseReducer(state = initialState.release, action) {

    let new_state;

    switch (action.type) {

        case types.GET_RELEASE_BLOCK_SUCCESS:
            new_state = Object.assign({}, state, { releaseBlock: action.releaseBlock });
            return new_state;

        case types.GET_RELEASE_SUCCESS:
            new_state = Object.assign({}, state, { release: action.release });
            return new_state;

        default:
            return state;
    }
}
