import * as types   from '../actions/actionTypes.js';
import initialState from '../store/initialState';

const actionTypeEndsInSuccess = (type) => {
    return type.substring(type.length - 8) === '_SUCCESS';
};

const ajaxStatusReducer = (state = initialState.app, action) => {

    if (action.type === types.BEGIN_AJAX_CALL) {
        var incrementedCount = state.ajaxCallsInProgress + 1;
        return Object.assign({}, state, { ajaxCallsInProgress: incrementedCount });
    } else if (action.type === types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
        var decrementedCount = state.ajaxCallsInProgress - 1;
        return Object.assign({}, state, { ajaxCallsInProgress: decrementedCount });
    }

    
    return state;
};

export default ajaxStatusReducer;