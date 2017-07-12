
import MrcApi            from '../../api/MrcApi';           // For example, substitute it with a real api.
import * as types        from './actionTypes';
import * as ajaxActions  from './ajaxStatusActions';

export function getReleaseBlockSuccess(value) { return { type: types.GET_RELEASE_BLOCK_SUCCESS, releaseBlock: value }; }

export function getReleaseBlock(blockId) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getReleaseBlock(blockId)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  return dispatch(getReleaseBlockSuccess(response));   // This will return a Promise with a PromiseValue containing the object returned from the 'getCourseSuccess' method, e.g. { type: types.GET_COURSE_SUCCESS,    course: value   }
                              }
                              );
        return promise;
    };
};
