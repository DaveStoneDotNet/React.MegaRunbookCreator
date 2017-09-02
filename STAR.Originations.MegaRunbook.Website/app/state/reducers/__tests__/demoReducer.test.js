
import demoReducer       from '../demoReducer';

import initialState      from '../../store/initialState';

import *  as demoActions from '../../actions/demoActions';

describe('Demo Reducer', () => {
  
    it('uses Initial State when undefined provided', () => {
  
        //   const expectedState = initialState.demo;
        //   const action        = { };
        //   const reducedState  = demoReducer(undefined, action);
  
        //   expect(reducedState).toEqual(expectedState);
    });
  
    // it('GET_COURSES_SUCCESS', () => {

    //     const initial  = initialState.demo.courses;
  
    //     const expected = [{ id: '', title: '', watchHref: '', authorId: '', length: '', category: '' }];

    //     const action   = demoActions.getCoursesSuccess(initial);
    //     const reducer  = demoReducer(initial, action);

    //     console.log('0001', initial);
    //     console.log('0002', action.courses);
    //     console.log('X003', reducer);
        
    //     expect(reducer).toEqual(expected);
    // });

    // it('Should handle GET_COURSES_SUCCESS', () => {
        
    //             const initialState = [];
        
    //             const newState = demoReducer(initialState, { type: 'GET_COURSES_SUCCESS', courses: [{ id: 1 }] });
        
    //             expect(newState).toEqual({
    //                                          courses: [{ id: 1 }]
    //                                      });
    //       });
      



    }
);

