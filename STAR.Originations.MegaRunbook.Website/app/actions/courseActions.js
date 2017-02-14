
import MrcApi                           from '../api/MrcApi';
import courseApi                        from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as types                       from './actionTypes';

// An action describes user intent.

// 1) Store gets notified of action.
// 2) Store sends action to reducers.
// 3) Reducers accept state and return new state.

// Action Creators... returning a plain javascript object which must have a 'type' property.
// Once an action is created, you need a function which will 'handle' that action, and that's where reducers come in.
// Reducers are just functions which accept a state and an action and returns a new state.

export function createCourseSuccess(course) { debugger; return { type: types.CREATE_COURSE_SUCCESS, course:  course  }; }
export function updateCourseSuccess(course) { debugger; return { type: types.UPDATE_COURSE_SUCCESS, course:  course  }; }
export function loadCoursesSuccess(courses) { debugger; return { type: types.LOAD_COURSES_SUCCESS,  courses: courses }; }

// ---

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
                        .then(course => { course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course)); })
                        .catch(error => { dispatch(ajaxCallError(error)); throw(error); }); 
    };
}

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return MrcApi.getAllCourses()
                     .then(courses => { dispatch(loadCoursesSuccess(courses)); })
                     .catch(error =>  { throw(error); }); 
    };
}

