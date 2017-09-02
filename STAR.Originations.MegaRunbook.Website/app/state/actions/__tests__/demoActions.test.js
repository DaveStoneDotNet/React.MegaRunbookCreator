import thunk               from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';
import { applyMiddleware } from 'redux';

import MrcApi              from '../../../api/MrcApi';

import demoReducer         from '../../reducers/demoReducer';
import initialState        from '../../store/initialState';

import * as demoActions    from '../demoActions';
import * as types          from '../actionTypes';

const middlewares = [ thunk ];
const mockStore   = configureMockStore(middlewares);

const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
                                             status:     status,
                                             statusText: statusText,
                                             headers:    {
                                                             'Content-type': 'application/json'
                                                         }
                                         });
};

describe ('Demo Actions', () => {
                                
    it('create an action for getting courses success', () => {

        const courses = { };
        const expectedAction = { type: types.GET_COURSES_SUCCESS, courses: courses };
        expect(demoActions.getCoursesSuccess(courses)).toEqual(expectedAction);
        }
      );
    }
);

// -------------------------------------------------------------------

const failedActions = [
                       { 'type': 'BEGIN_AJAX_CALL', 'ajaxCount': undefined }, 
                       { 'type': 'AJAX_CALL_ERROR', 'ajaxCount': undefined }, 
                       { 'type': 'END_AJAX_CALL'  , 'ajaxCount': undefined }
                      ];

describe('Async Actions', () => {

    // SUCCESSFUL
    // it('GET_COURSES_SUCCESS', () => {

    //     const init = { 'status' : 500 , 'statusText' : 'SuperSmashingGreat!' };

    //     fetch.mockResponse(JSON.stringify({courses: [] }), init);

    //     //fetch.mockReject();

    //     const expectedAction  =  { 'type': 'END_AJAX_CALL',       'ajaxCount': undefined       };
    //     const expectedActions = [
    //                              { 'type': 'BEGIN_AJAX_CALL'    , 'ajaxCount': undefined       }, 
    //                              { 'type': 'GET_COURSES_SUCCESS', 'courses':   {'courses': []} }, 
    //                              { 'type': 'END_AJAX_CALL'      , 'ajaxCount': undefined       }
    //                             ];

    //     const store = mockStore();

    //     return store.dispatch(demoActions.getCourses()).then((actualAction) => {

    //         // return of async actions
    //         expect(store.getActions()).toEqual(expectedActions);
    //         expect(actualAction).toEqual(expectedAction);
    //     });
    // });

    // // VALID ERROR
    // it('AJAX_CALL_ERROR', () => {
        
    //     fetch.mockReject();

    //     const expectedAction = { 'type': 'END_AJAX_CALL', 'ajaxCount': undefined };

    //     const store = mockStore();

    //     return store.dispatch(demoActions.getCourses()).then((action) => {

    //         // return of async actions
    //         expect(store.getActions()).toEqual(failedActions);
    //         expect(action).toEqual(expectedAction);
    //     });
    // });

    // SUCCCESS
    it('GET_COURSE_SUCCESS', () => {
        
        const initial  = initialState.demo.courses;
        
        const expectedAction = { type: types.GET_COURSES_SUCCESS, courses: initial };
        const actualAction   = demoActions.getCoursesSuccess(initial);
    
        expect(actualAction).toEqual(expectedAction);
    });

    // it('GET_COURSE_SUCCESS', () => {
        
    //     const initialState = {};

    //     const newState = demoReducer(initialState, { type: 'GET_COURSE_SUCCESS', course: { id: 1 } });

    //     expect(newState).toEqual({ course: { id: 1 } });
    // });

    // it('CREATE_COURSE_SUCCESS', () => {
        
    //     const initial  = initialState.demo.course;
        
    //     const expected = {
    //                          id:        '', 
    //                          title:     '', 
    //                          watchHref: '', 
    //                          authorId:  '', 
    //                          length:    '', 
    //                          category:  ''
    //                      };
    
    //         const action  = demoActions.createCourseSuccess(initial);
    //         const reducer = demoReducer(initial, action.course);
    
    //         expect(reducer).toEqual(expected);
    // });

    // it('UPDATE_COURSE_SUCCESS', () => {
        
    //     const initial  = initialState.demo.course;
        
    //     const expected = {
    //                          id:        '', 
    //                          title:     '', 
    //                          watchHref: '', 
    //                          authorId:  '', 
    //                          length:    '', 
    //                          category:  ''
    //                      };
    
    //     const action  = demoActions.updateCourseSuccess(initial);
    //     const reducer = demoReducer(initial, action.course);

    //     expect(reducer).toEqual(expected);
    // });

    // it('creates GET_COURSE_DEMOS_SUCCESS when get courses is done', () => {
        
            //     const init = { 'status' : 500 , 'statusText' : 'SuperSmashingGreat!' };
        
            //     fetch.mockResponse(JSON.stringify({courses: [] }), init);
        
            //     //fetch.mockReject();
        
            //     const expectedAction  =  { 'type': 'END_AJAX_CALL',       'ajaxCount': undefined       };
            //     const expectedActions = [
            //                              { 'type': 'BEGIN_AJAX_CALL'    , 'ajaxCount': undefined       }, 
            //                              { 'type': 'GET_COURSES_SUCCESS', 'courses':   {'courses': []} }, 
            //                              { 'type': 'END_AJAX_CALL'      , 'ajaxCount': undefined       }
            //                             ];
        
            //     const store = mockStore();
        
            //     return store.dispatch(demoActions.getCourseDemos({})).then((action) => {
        
            //         // return of async actions
            //         // expect(store.getActions()).toEqual(expectedActions);
            //         expect(action).toEqual(expectedAction);
            //     });
            // });
                

            















    

});

