import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';
import thunk                                     from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer                               from '../reducers';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action - an object describing what happened.
// To specify how actions transform the state tree, you write pure reducers.

// The actual 'shape' of the store is better reflected in 'reducers/index.js' which combines all of the defined reducers into a single reducer, 
// and 'reducers/initialState.js' which is an optional, non-redux object, intended to provide default values for each defined state object.
// That is, by defining initial states, it can be helpful to provide a picture of the full object tree in the store.

export default function configureStore(initialState) {

    return createStore(rootReducer, initialState, compose( applyMiddleware(thunk, reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension() : f => f) );
}

