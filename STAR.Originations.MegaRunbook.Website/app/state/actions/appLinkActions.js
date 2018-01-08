
import MrcApi           from '../../api/MrcApi'

import * as types       from './actionTypes'
import * as ajaxActions from './ajaxStatusActions'

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// ----------------------------------------------------------------------------------s-------------------------------------

export function updateSelectedAppGroup(selectedAppGroup) { return { type: types.UPDATE_SELECTED_APP_GROUP, selectedAppGroup: selectedAppGroup } }
export function updateSelectedAppType(selectedAppType)   { return { type: types.UPDATE_SELECTED_APP_TYPE,  selectedAppType:  selectedAppType  } }
export function updateAppSearchText(appSearchText)       { return { type: types.UPDATE_APP_SEARCH_TEXT,    appSearchText:    appSearchText    } }
export function updateApplicationLinks(appLinks)         { return { type: types.UPDATE_APPLICATION_LINKS,  appLinks:         appLinks         } }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function updateAppGroup(selectedAppGroup) {
    return function (dispatch) {
        dispatch(updateSelectedAppGroup(selectedAppGroup))
        dispatch(updateIsInitialized({ isUserInitialized: true }))
    }
}

export function getApplicationLinks(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall())
        return MrcApi.getApplicationLinks(request)
            .then(response => {
                dispatch(updateApplicationLinks(response))
            })
            .catch((error) => { throw (error) })
            .then(() => dispatch(ajaxActions.endAjaxCall()))
    }
}
