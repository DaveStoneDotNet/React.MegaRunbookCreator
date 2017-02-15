
import * as types   from '../actions/appActions';
import initialState from './initialState';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

export default function appReducer(state = initialState.app, action) {

    switch (action.type) {

        case types.UPDATE_MONKEY:
            return action.isMonkey;

        default:
            return state;
    }
}