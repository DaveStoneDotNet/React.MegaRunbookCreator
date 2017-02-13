﻿import reduxImmutableStateInvariant              from 'redux-immutable-state-invariant';
import thunk                                     from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer                               from '../reducers';

export default function configureStore(initialState) {
    return createStore(
      rootReducer, 
      initialState,
      compose(
        applyMiddleware(thunk, reduxImmutableStateInvariant()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
}

