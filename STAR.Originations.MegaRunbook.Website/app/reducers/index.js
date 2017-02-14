import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import courses             from './courseReducer';
import authors             from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Naming is important here. Each of the 'properties' listed below become the 
// property names on 'state'. For example, 'state.courses'.
// 
// That is, the 'courseReducer' was aliased to 'courses' so it can be referenced
// as 'state.courses' instead of 'state.courseReducer'.
// 

const rootReducer = combineReducers({
                                        routing:             routerReducer, 
                                        courses:             courses, 
                                        authors:             authors, 
                                        ajaxCallsInProgress: ajaxCallsInProgress
                                    });

export default rootReducer;