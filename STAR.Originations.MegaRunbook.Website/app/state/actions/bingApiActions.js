
import MrcApi            from '../../api/MrcApi';           // For example, substitute it with a real api.
import * as types        from './actionTypes';
import * as ajaxActions  from './ajaxStatusActions';

export function getBingAuthorizationTokenSuccess(value) { return { type: types.GET_BING_AUTHORIZATION_TOKEN_SUCCESS, authorizationToken: value }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function getBingAuthorizationToken(apiKey) {
    return function(dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        const promise = MrcApi.getBingAuthorizationToken(apiKey)
                              .then(response => {
                                  dispatch(ajaxActions.endAjaxCall());
                                  console.log('BING API ACTION RESPONSE', response);
                                  return dispatch(getBingAuthorizationTokenSuccess(response));
                              })
                             .catch((error) => console.log('BING API ERROR', error));
        return promise;
    };
};

