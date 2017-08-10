//import nock             from 'nock';
import thunk              from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import MrcApi             from '../../../api/MrcApi';

import demoReducer        from '../../reducers/demoReducer';
import initialState       from '../../store/initialState';

import * as demoActions   from '../demoActions';
import * as types         from '../actionTypes';

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
                                
    it('does not crash', () => {
                               
            //const wrapper = setup();
            //expect(wrapper.find('div').length).toBe(1);
        }
      );
    }
);


describe('Demo Reducer', () => {

    it('Initializes the State', () => {

        const expected = initialState.demo;
        const action   = { };
        const reducer  = demoReducer(undefined, action);

        expect(reducer).toEqual(expected);

    });

    it('Sets the Demo to the Given Value', () => {

        const initial  = initialState.demo.courses;

        const expected = [{ id: '', title: '', watchHref: '', authorId: '', length: '', category: '' }];
        const action   = demoActions.getCoursesSuccess(initial);
        const reducer  = demoReducer(initial, action.courses);

        expect(reducer).toEqual(expected);

    });

    it('Should handle GET_COURSES_SUCCESS', () => {

        const initialState = [];

        const newState = demoReducer(initialState, { type: 'GET_COURSES_SUCCESS', courses: [{ id: 1 }] });

        expect(newState).toEqual({
                                     courses: [{ id: 1 }]
                                 });
    });
});






















//function success() { return { type: 'FETCH_DATA_SUCCESS' } };

//describe ('Demo Async Redux Actions', 

//          () => {

//                    it('does not crash either', 
                        
//                       () => {
//                                 const store = mockStore({ });
                             
//                                 store.dispatch(MrcApi.getCourses()).then(() => {
//                                                                                  const actions = store.getActions();
//                                                                                  expect(actions[0]).toEqual(success());
//                                                                                }
//                                                                         )
//                                                                    .catch((error) => console.log('RATS 02', error));
//                             }
//                      );
//                }
//         );

