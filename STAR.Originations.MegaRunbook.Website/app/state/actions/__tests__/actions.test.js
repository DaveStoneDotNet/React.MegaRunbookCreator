import configureStore   from 'redux-mock-store';
import thunk            from 'redux-thunk';

import MrcApi           from '../../../api/MrcApi';

import * as types       from '../../../state/actions/actionTypes';
import * as ajaxActions from '../../../state/actions/ajaxStatusActions';
import * as appActions  from '../../../state/actions/appActions';

const middlewares = [thunk];
const mockStore   = configureStore(middlewares);

const expectedAction = { type: types.END_AJAX_CALL, ajaxCount: undefined };

const store = mockStore({});

describe('AppActions', () => {
    
    it('should get lookups', () => {
        
            store.dispatch(appActions.getLookups())
                .then((actualAction) => { 
                    expect(actualAction).toEqual(expectedAction);
                })
                .catch((err) => { 
                    //console.log('EXCEPTION', err);
                });
        
        });
    
    it('should get user', () => {
        
            store.dispatch(appActions.getUser())
                .then((actualAction) => { 
                    expect(actualAction).toEqual(expectedAction);
                })
                .catch((err) => { 
                    //console.log('EXCEPTION', err);
                });
        
        });
    
    it('should get config', () => {
        
            store.dispatch(appActions.getConfig())
                .then((actualAction) => { 
                    expect(actualAction).toEqual(expectedAction);
                })
                .catch((err) => { 
                    //console.log('EXCEPTION', err);
                });
        
        });
    
    
    it('should get data', () => {
        
            store.dispatch(appActions.getData())
                .then((actualAction) => { 
                    expect(actualAction).toEqual(expectedAction);
                })
                .catch((err) => { 
                    console.log('EXCEPTION', err);
                });
        
        });
    
    it('should get get lookups success', () => {
        
            // const o = store.dispatch(appActions.getLookupsSuccess({}));
            // console.log('MONKEY', o);
        
        });
});

