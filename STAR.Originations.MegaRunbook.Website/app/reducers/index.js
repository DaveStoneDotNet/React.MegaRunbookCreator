import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import appReducer          from './appReducer';
import courseReducer       from './courseReducer';
import authorReducer       from './authorReducer';

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

                                        app:      appReducer,
                                        courses:  courseReducer, 
                                        authors:  authorReducer, 

                                        ajaxCallsInProgress: ajaxCallsInProgress
                                    });

export default rootReducer;