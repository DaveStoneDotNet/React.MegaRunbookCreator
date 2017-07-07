/* eslint-disable import/default */

import React                      from 'react';
import { render }                 from 'react-dom';
import { Provider }               from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore }   from 'react-router-redux';

import routes                     from './routes';
import configureStore             from './state/store/configureStore';

import * as courseActions         from './state/actions/courseActions';
import * as authorActions         from './state/actions/authorActions';
import * as appActions            from './state/actions/appActions';

// Import babel-polyfill to support Object.assign functions for deep-cloning of immutable objects.
// Babel does not support Object.assign by default, so a pollyfill is needed.
// 
//      e.g. Object.assign({}, state, { someProperty: 'some value' });

import 'babel-polyfill';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

const store = configureStore();

store.dispatch(courseActions.getCourses());
store.dispatch(appActions.getUser());
store.dispatch(appActions.getLookups());
store.dispatch(authorActions.getAuthorLookups());

//store.subscribe(() =>
//    console.log(store.getState())
//);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store = { store }>
    <Router history = { history } routes = { routes } onUpdate = { () => window.scrollTo(0, 0) } />
  </Provider>, document.getElementById('app')
);
