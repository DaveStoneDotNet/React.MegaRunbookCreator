/* eslint-disable import/default */

import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore }   from 'react-router-redux';

import routes                     from './routes';
import configureStore             from './store/configureStore';

import * as courseActions         from './actions/courseActions';
import * as userActions           from './actions/userActions';
import * as lookupActions         from './actions/lookupActions';

// Import babel-polyfill to support Object.assign functions for deep-cloning of immutable objects.
// Babel does not support Object.assign by default, so a pollyfill is needed.
// 
//      e.g. Object.assign({}, state, { someProperty: 'some value' });

import 'babel-polyfill';

// It's possible to pass the optional 'initialState' parameter here.

const store = configureStore();

store.dispatch(courseActions.getCourses());
store.dispatch(userActions.getUser());
store.dispatch(lookupActions.getLookups());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store = { store }>
    <Router history = { history } routes = { routes } />
  </Provider>, document.getElementById('app')
);
