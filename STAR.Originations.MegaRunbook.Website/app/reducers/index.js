import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import app                 from './appReducer';
import courses             from './courseReducer';
import authors             from './authorReducer';
import user                from './userReducer';
import lookups             from './lookupReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

// The Root Reducer where you define/name and shape the store.
// 
// Naming is important here. Each of the 'properties' listed below become the 
// property names on 'state'. For example, 'state.courses'.
// 
// That is, the 'courseReducer' was aliased to 'courses' so it can be referenced
// as 'state.courses' instead of 'state.courseReducer'.
// 

const rootReducer = combineReducers({
                                        routing:  routerReducer, 

                                        app:      app,
                                        courses:  courses, 
                                        authors:  authors, 
                                        user:     user,
                                        lookups:  lookups, 

                                        ajaxCallsInProgress: ajaxCallsInProgress
                                    });

export default rootReducer;