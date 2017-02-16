
import * as types   from '../actions/actionTypes';
import initialState from './initialState';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

export default function appReducer(state = initialState.app, action) {

    switch (action.type) {

        case types.IS_INITIALIZED:
            return Object.assign({}, state, action.app);

        default:
            return state;
    }
}