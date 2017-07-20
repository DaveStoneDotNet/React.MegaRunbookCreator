import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';

import appReducer          from './appReducer';
import releaseReducer      from './releaseReducer';
import demoReducer         from './demoReducer';

import ajaxStatusReducer   from './ajaxStatusReducer';
import randomDataReducer   from './randomDataReducer';
import bingApiReducer      from './bingApiReducer';

// The Root Reducer where you define/name and shape the store.
// 
// Naming is important here. Each of the 'properties' listed below become the property names on 'state'. For example, 'state.courses'.
// 
// That is, the 'demoReducer' was aliased to 'courses' so it can be referenced // as 'state.courses' instead of 'state.demoReducer'.
// 
// Given the following...
//
//              const rootReducer = combineReducers({ courses: demoReducer })
//
//... the 'state' parameter passed into the 'demoReducer' below will be the 'courses' property in the 'store'...
// 
//              export default function demoReducer(state, action)
// 
// The corresponding 'action.type' will then set 'courses' to whatever value the reducer returns, typically something like 'action.courses' 
// or potentially some other non-mutated value.
// 
// This essentially represents the first-level hierarchy of the store. Each named property below will be set to the 'state' returned by the corresponding reducer 
// based on the action type it is passed.
// 
// This represents first-level hierarchy because, while you could do something like this...
//
//              app: appReducer
// 
// ... you would not be able to do this...
//
//              app.lookups: appReducer
//
// Note the dot-notation in 'app.lookups'. What I'm not currently certain of is if you could surround the property name in quotes, like so...
//
//              'app.lookups': appReducer
//
// Currently, 'app' here is special. 'app' is intended to be those values that are global to the entire application; for example, 'user' and 'lookups'.
// This is accomplished by mapping 'app' to the 'props' in the 'Shell' component and then cloning any routing element and attaching 'app' as a property 
// on the child element/component.

const rootReducer = combineReducers({
                                        routing:        routerReducer, 
                                                 
                                        app:            appReducer,
                                        release:        releaseReducer,
                                        demo:           demoReducer, 
                                        bingApiReducer: bingApiReducer, 

                                        randomData:     randomDataReducer, 
                                        ajaxCount:      ajaxStatusReducer
                                    });

export default rootReducer;