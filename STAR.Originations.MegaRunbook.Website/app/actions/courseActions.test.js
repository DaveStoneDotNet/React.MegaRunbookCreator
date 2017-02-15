import expect             from 'expect';
import nock               from 'nock';
import thunk              from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import * as courseActions from './courseActions';
import * as types         from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            //arrange
            const course = {id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };

            //act
            const action = courseActions.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and GET_COURSES_SUCCESS when loading courses', (done) => {

        // Here's an example call to nock.
        // nock('http://example.com/')
        //   .get('/courses')
        //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

        const expectedActions = [
          {type: types.BEGIN_AJAX_CALL},
          {type: types.GET_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions, done);
        store.dispatch(courseActions.getCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.GET_COURSES_SUCCESS);
            done();
        });
    });
});
