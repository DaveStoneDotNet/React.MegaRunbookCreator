import * as types        from './actionTypes';
import * as ajaxActions  from './ajaxStatusActions';
import MrcApi            from '../../api/MrcApi';

export function getAuthorsSuccess(value) { return { type: types.GET_AUTHORS_SUCCESS, authors: value }; }

export function getAuthorLookups() {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getAuthorLookups()
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(getAuthorsSuccess(response));
                              })
                             .catch(error => console.log('HANDLE ERROR'));
        return promise;
    };
};

