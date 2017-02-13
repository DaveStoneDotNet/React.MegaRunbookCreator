
import courseApi                        from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import * as types                       from './actionTypes';

// An action describes user intent.

// 1) Store gets notified of action.
// 2) Store sends action to reducers.
// 3) Reducers accept state and return new state.

export function loadCoursesSuccess(courses) { return { type: types.LOAD_COURSES_SUCCESS,  courses: courses }; }
export function createCourseSuccess(course) { return { type: types.CREATE_COURSE_SUCCESS, course:  course  }; }
export function updateCourseSuccess(course) { return { type: types.UPDATE_COURSE_SUCCESS, course:  course  }; }

export function loadCourses() {
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
                        .then(courses => { dispatch(loadCoursesSuccess(courses)); })
                        .catch(error =>  { throw(error); }); 
    };
}

export function saveCourse(course) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
                        .then(course => { course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course)); })
                        .catch(error => { dispatch(ajaxCallError(error)); throw(error); }); 
    };
}
