
import courseApi         from '../../api/mockCourseApi';    // Only need to change this import to use a real api instead of a mocked one.
import MrcApi            from '../../api/MrcApi';           // For example, substitute it with a real api.
import * as types        from './actionTypes';

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

export function getCoursesSuccess(courses)  { return { type: types.GET_COURSES_SUCCESS,   demo: courses        }; }
export function getCourseSuccess(course)    { return { type: types.GET_COURSE_SUCCESS,    demo: course         }; }
export function createCourseSuccess(course) { return { type: types.CREATE_COURSE_SUCCESS, demo: course         }; }
export function updateCourseSuccess(course) { return { type: types.UPDATE_COURSE_SUCCESS, demo: course         }; }

export function beginAjaxCall(ajaxCount)   { return { type: types.BEGIN_AJAX_CALL,        ajaxCount: ajaxCount }; }
export function endAjaxCall(ajaxCount)     { return { type: types.END_AJAX_CALL,          ajaxCount: ajaxCount }; }
export function ajaxCallError(ajaxCount)   { return { type: types.AJAX_CALL_ERROR,        ajaxCount: ajaxCount }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------
// A thunk always returns a function that accepts a dispatch....
// 
//      return function (dispatch) 
// 
// ... this wrapper function will exist in every thunk.
// 
// -----------------------------------------------------------------------------------------------------------------------

export function getCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getCourses()
                     .then(response => { dispatch(getCoursesSuccess(response)); })
                     .catch(error => { console.log('HANDLE ERROR'); })
                     .then(() => dispatch(endAjaxCall()));
    };
};

export function getCourse(courseId) {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getCourse(courseId)
                     .then(response => { dispatch(getCourseSuccess(response)); })
                     .catch(error => { console.log('HANDLE ERROR'); })
                     .then(() => dispatch(endAjaxCall()));
    };
};

// -------------------------------------------------------------------------------------------------

// CourseForm > Button Click > ManageCoursePage.onSave > ManageCoursePage.saveCourse > this.props.actions.saveCourse(this.state.course)

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
                        .then(course => { course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course)); })
                        .catch(error => { console.log('HANDLE ERROR'); })
                        .then(()     => { dispatch(endAjaxCall()); });
    };
};

// -------------------------------------------------------------------------------------------------

