// OBSOLETE

//import MrcApi                           from '../api/MrcApi';
//import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
//import * as types                       from './actionTypes';

//// -----------------------------------------------------------------------------------------------------------------------
//// Actions:
//// -----------------------------------------------------------------------------------------------------------------------
//// 
//// Events happening in an app are called 'actions'. They're just plain object describing events. They must have a 'type' key. 
//// The second property contains data, is optional, and can be of any type.
//// 
//// An action describes user intent.
//// 
//// 1) Store gets notified of action.
//// 2) Store sends action to reducers.
//// 3) Reducers accept state and return new state.
//// 
//// Action Creators... returning a plain javascript object which must have a 'type' property.
//// Once an action is created, you need a function which will 'handle' that action, and that's where reducers come in.
//// Reducers are just functions which accept a state, an action, and returns a new state.
//// 
//// All reducers are called when an action is dispatched.
//// 
//// These ___SUCCESS actions don't fire until all the responses have been asynchronously returned by the API calls.
//// 
//// -----------------------------------------------------------------------------------------------------------------------

//export function getLookupsSuccess(lookups)  { return { type: types.GET_LOOKUPS_SUCCESS,   lookups: lookups }; }

//// -----------------------------------------------------------------------------------------------------------------------
//// Thunks:
//// -----------------------------------------------------------------------------------------------------------------------
//// A thunk always returns a function that accepts a dispatch....
//// 
////      return function (dispatch) 
//// 
//// ... this wrapper function will exist in every thunk.
//// 
//// -----------------------------------------------------------------------------------------------------------------------

//export function getLookups() {
//    return function(dispatch) {
//        dispatch(beginAjaxCall());
//        return MrcApi.getLookups()
//                     .then(response => { dispatch(getLookupsSuccess(response)); })
//                     .catch(error   => { throw(error); }); 
//    };
//};

//// -----------------------------------------------------------------------------------------------------------------------
