
import MrcApi            from '../../api/MrcApi';           // For example, substitute it with a real api.
import * as types        from './actionTypes';
import * as ajaxActions  from './ajaxStatusActions';

export function getReleaseBlockSuccess(value) { return { type: types.GET_RELEASE_BLOCK_SUCCESS, releaseBlock: value }; }
export function getReleaseSuccess(value)      { return { type: types.GET_RELEASE_SUCCESS,       release:      value }; }

export function getRelease(request) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getRelease(request)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(getReleaseSuccess(response));
                              }
                              );
        return promise;
    };
};

export function getReleaseBlock(blockId) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getReleaseBlock(blockId)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(getReleaseBlockSuccess(response));
                              }
                              );
        return promise;
    };
};
