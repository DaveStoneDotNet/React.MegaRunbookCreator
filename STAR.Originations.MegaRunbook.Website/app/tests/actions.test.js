import configureStore   from 'redux-mock-store';
import thunk            from 'redux-thunk';

import MrcApi           from '../api/MrcApi';
import * as types       from '../state/actions/actionTypes';
import * as ajaxActions from '../state/actions/ajaxStatusActions';
import * as appActions  from '../state/actions/appActions';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const expectedAction = { type: types.END_AJAX_CALL, ajaxCount: undefined };

it('should execute fetch data', () => {

    const store = mockStore({});

    store.dispatch(appActions.getData())
        .then((actualAction) => { 
            //console.log('OOO', actualAction);
            expect(actualAction).toEqual(expectedAction);
        })
        .catch((err) => { 
            console.log('EXCEPTION', err);
        });

});