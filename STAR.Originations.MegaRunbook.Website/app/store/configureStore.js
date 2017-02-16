import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';
import thunk                                     from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer                               from '../reducers';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

// The actual 'shape' of the store is better reflected in 'reducers/index.js' which combines all of the defined reducers into a single reducer, 
// and 'reducers/initialState.js'.

export default function configureStore(initialState) {

    return createStore(rootReducer, initialState, compose( applyMiddleware(thunk, reduxImmutableStateInvariant()), window.devToolsExtension ? window.devToolsExtension() : f => f) );
}

