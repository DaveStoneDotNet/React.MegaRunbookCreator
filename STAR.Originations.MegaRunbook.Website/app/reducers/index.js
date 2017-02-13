import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import courses             from './courseReducer';
import authors             from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    routing:             routerReducer, 
    courses:             courses, 
    authors:             authors, 
    ajaxCallsInProgress: ajaxCallsInProgress
});


export default rootReducer;