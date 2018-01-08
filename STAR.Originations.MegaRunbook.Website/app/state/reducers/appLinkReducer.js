
import * as types   from '../actions/actionTypes'
import initialState from '../store/initialState'

export default function appLinkReducer(state = initialState.appLinks, action) {

    let new_state

    switch (action.type) {

        case types.UPDATE_SELECTED_APP_GROUP:
            new_state = Object.assign({}, state, { selectedAppGroup: action.selectedAppGroup})
            return new_state

        case types.UPDATE_SELECTED_APP_TYPE:
            new_state = Object.assign({}, state, { selectedAppType: action.selectedAppType})
            return new_state

        case types.UPDATE_APP_SEARCH_TEXT:
            new_state = Object.assign({}, state, { appSearchText: action.appSearchText})
            return new_state

        case types.UPDATE_APPLICATION_LINKS:
            new_state = Object.assign({}, state, { appLinkList: action.appLinks})
            return new_state

        default:
            return state
    }
}
