
import * as types   from '../actions/actionTypes';
import initialState from '../store/initialState';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

export default function demoReducer(state = initialState.demo, action) {

    let new_state;

    switch (action.type) {

        case types.GET_COURSES_SUCCESS:
            new_state = Object.assign({}, state, { courses: action.courses });
            return new_state;

        case types.GET_COURSE_SUCCESS:
            new_state = Object.assign({}, state, { course: action.course });
            return new_state;

        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)];

        default:
            return state;
    }
}