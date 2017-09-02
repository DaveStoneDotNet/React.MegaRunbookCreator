
import courseApi         from '../../api/mockCourseApi';    // Only need to change this import to use a real api instead of a mocked one.
import MrcApi            from '../../api/MrcApi';           // For example, substitute it with a real api.

import * as types        from './actionTypes';
import * as ajaxActions  from './ajaxStatusActions';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------
// 
// Events happening in an app are called 'actions'. They're just plain object describing events. They must have a 'type' key. 
// The second property contains data, is optional, and can be of any type.
// 
// An action describes user intent.
// 
// 1) Store gets notified of action.
// 2) Store sends action to reducers.
// 3) Reducers accept state and return new state.
// 
// Action Creators... returning a plain javascript object which must have a 'type' property.
// Once an action is created, you need a function which will 'handle' that action, and that's where reducers come in.
// Reducers are just functions which accept a state, an action, and returns a new state.
// 
// All reducers are called when an action is dispatched.
// 
// These ___SUCCESS actions don't fire until all the responses have been asynchronously returned by the API calls.
// 
// -----------------------------------------------------------------------------------------------------------------------

export function getCoursesSuccess(value)       { return { type: types.GET_COURSES_SUCCESS,        courses:        value }; }
export function getCourseSuccess(value)        { return { type: types.GET_COURSE_SUCCESS,         course:         value }; }
export function createCourseSuccess(value)     { return { type: types.CREATE_COURSE_SUCCESS,      course:         value }; }
export function updateCourseSuccess(value)     { return { type: types.UPDATE_COURSE_SUCCESS,      course:         value }; }
                                                                                                                  
export function getCourseDemosSuccess(value)   { return { type: types.GET_COURSE_DEMOS_SUCCESS,   response:       value }; }
export function getCourseDemoSuccess(value)    { return { type: types.GET_COURSE_DEMO_SUCCESS,    course:         value }; }
export function upsertCourseDemoSuccess(value) { return { type: types.UPSERT_COURSE_DEMO_SUCCESS, courseResponse: value }; }

export function signalrLineDataReceived(value) { return { type: types.SIGNALR_LINE_DATA_RECEIVED, lineData:       value }; }
export function signalrPieDataReceived(value)  { return { type: types.SIGNALR_PIE_DATA_RECEIVED,  pieData:        value }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------
// Redux Thunks middleware allows you to write action creators that return a function instead of an action. The thunk
// can be used to *delay* the dispatch of an action, or to dispatch only if a certain condition is met. The inner function 
// received the store methods dispatch and getState as parameters.
//
// To enable Redux Thunk, use applyMiddleware() when configuring the store in 'configStore.js'
// 
//          return createStore(rootReducer, initialState, compose(applyMiddleware(thunk, . . . )));
// 
// -----------------------------------------------------------------------------------------------------------------------
// 
// A thunk is a function that wraps an expression to delay its evaluation.
// 
// A thunk always returns a function that accepts a dispatch....
// 
//      return function (dispatch) 
// 
// ... this wrapper function will exist in every thunk.
// 
// -----------------------------------------------------------------------------------------------------------------------
// 
// The 'dispatch' here was really confusing. Where does it come from? How is it passed in? It's not global. It's not 
// referenced via an import or a prop off the store. We're not even referencing 'react-redux'.
// 
// The 'dispatch' comes from the 'bindActionCreators' function in a connected component...
// 
//  "The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely you'll access
//   it using a helper like react-redux's connect(). You can use bindActionCreators() to automatically bind many action
//   creators to a dispatch() function." For example...
// 
//              const mapDispatchToProps = (dispatch) => { 
//                  return {
//                             actions: {
//                                          appActions:     bindActionCreators(appActions, dispatch), 
//                                          releaseActions: bindActionCreators(releaseActions, dispatch)
//                                      }
//                         };
//              };
// 
//              export default connect(mapStateToProps, mapDispatchToProps)(Releases);
// 
// Actions describe the fact that something happened, but don't explicitly specify how the application's state changes
// in response. This is the job of reducers.fs
// 
// A thunk is a function that wraps an expression to DELAY ITS EVALUATION, e.g. an async call.
// Thunk middleware allows dispatching thunk async actions as if they were actions.
// 
//          e.g. store.dipatch(someAsyncOperations('some-parameter')).then(() => { console.log('Done'); });
// 
// 

// export function getCourses() {
//     return function(dispatch) {
//         dispatch(ajaxActions.beginAjaxCall());
//         return MrcApi.getCourses()
//                      .then(response => dispatch(getCoursesSuccess(response)))
//                      .catch(error   => dispatch(ajaxActions.ajaxCallError()))
//                      .then(()       => dispatch(ajaxActions.endAjaxCall()));
//     };
// }

export function getCourses() {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getCourses()
                     .then(response => { 
                         return dispatch(getCoursesSuccess(response));
                     })
                     .catch(error   => {
                        return dispatch(ajaxActions.ajaxCallError());
                     })
                     .then(()       => {
                        return dispatch(ajaxActions.endAjaxCall());
                     });
    };
}

// It took considerable effort to orchestrate the 'begin' and 'end' ajax calls with the actual return value 
// of the ajax call itself.
// 
// The final output of a Thunk function is a 'Promise' consisting of a 'PromiseStatus' and a 'PromiseValue'. 
// The 'PromiseValue' is the ACTION defined above returning an object similar to the following: 
//
//          { type: 'SOME_STRING_CONSTANT', somePropertyName: somePropertyValue }
//
// This 'PromiseValue' is the RESPONSE returned to the calling method.
//
// Since the calling method receives a Promise, the calling method will require a 'then' method which will 
// pass the RESPONSE of this call. What was confusing was the various ways to code the 'then' bits to 
// return this action RESPONSE. In this example, we're talking about a singular 'course' returned from 
// the database.
// 
// The following is *WRONG*:
//
//          export function getCourse(courseId) {
//              return function(dispatch) {
//                  dispatch(beginAjaxCall());
//                  return MrcApi.getCourse(courseId)
//                               .then(response => dispatch(getCourseSuccess(response)))        <-------- 1
//                               .catch(error   => console.log('HANDLE ERROR'))
//                               .then(()       => dispatch(endAjaxCall()));                    <-------- 2
//              };
// 
// It appears that when TWO 'then' statements exist, the responses are combined to something 
// resembling the following: 
// 
//          PromiseValue: {
//                          type:   'GET_COURSE_SUCCESS', 
//                          course: { type: 'END_AJAX_CALL', ajaxCount: '' }
//                        }
// 
// Additionally, the use of curlies was confusing. You could modify the first 'then' response as 
// shown below and enclose it in curlies. This allows you to run multiple statements, e.g. to dispatch 
// both the 'endAjaxCall' and 'getCourseSuccess' actions, thereby eliminating the second 'then' 
// statement shown above...
//
//          export function getCourse(courseId) {
//              return function(dispatch) {
//                  dispatch(beginAjaxCall());
//                  return MrcApi.getCourse(courseId)
//                               .then(response => { 
//                                                      dispatch(getCourseSuccess(response));   <-------- 1
//                                                      dispatch(endAjaxCall());                <-------- 2
//                                                 })   
//                               .catch(error   => console.log('HANDLE ERROR'));
//              };
// 
// However, doing this just returns 'undefined' as the RESPONSE. The final thing to do is to actually 
// *RETURN* the dispatch to 'getCourseSuccess'...
//
//          {
//              dispatch(endAjaxCall()); 
//              return dispatch(getCourseSuccess(response));    <-------- RIGHT, using a return statement
//          }
//
// ... instead of ...
//
//          {          
//              dispatch(endAjaxCall()); 
//              dispatch(getCourseSuccess(response));           <-------- WRONG, does not use a return statement
//          }

export function getCourse(courseId) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getCourse(courseId)
                              .then(response => {
                                     dispatch(ajaxActions.endAjaxCall());
                                     return dispatch(getCourseSuccess(response));   // This will return a Promise with a PromiseValue containing the object returned from the 'getCourseSuccess' method, e.g. { type: types.GET_COURSE_SUCCESS,    course: value   }
                                 }
                              );
        return promise;
    };
}

// -------------------------------------------------------------------------------------------------

// CourseForm > Button Click > ManageCoursePage.onSave > ManageCoursePage.saveCourse > this.props.actions.saveCourse(this.state.course)

export function saveCourse(course) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return courseApi.saveCourse(course)
                        .then(course => { course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course)); })
                        .catch(error => dispatch(ajaxActions.ajaxCallError()))
                        .then(()     => { dispatch(ajaxActions.endAjaxCall()); });
    };
}

// -------------------------------------------------------------------------------------------------

export function getCourseDemos(request) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getCourseDemos(request)
                     .then(response => dispatch(getCourseDemosSuccess(response)))
                     .catch(error   => dispatch(ajaxActions.ajaxCallError()))
                     .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getCourseDemo(courseId) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getCourseDemo(courseId)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(getCourseDemoSuccess(response));
                              })
                             .catch(error => console.log('HANDLE ERROR', error));
        return promise;
    };
}

export function upsertCourseDemo(course) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.upsertCourseDemo(course)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(upsertCourseDemoSuccess(response));
                              })
                             .catch(error => dispatch(ajaxActions.ajaxCallError()));
        return promise;
    };
}

