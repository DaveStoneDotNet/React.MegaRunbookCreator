
import MrcApi           from '../../api/MrcApi';
import * as types       from './actionTypes';
import * as ajaxActions from './ajaxStatusActions';

export function getRfcsSuccess(data)              { return { type: types.GET_RFCS_SUCCESS,               config: data }; }
export function getRfcSuccess(data)               { return { type: types.GET_RFC_SUCCESS,                config: data }; }
export function getRunbookTemplatesSuccess(data)  { return { type: types.GET_RUNBOOK_TEMPLATES_SUCCESS,  config: data }; }
export function getRunbookTemplateSuccess(data)   { return { type: types.GET_RUNBOOK_TEMPLATE_SUCCESS,   config: data }; }
export function getRunbookStepSuccess(data)       { return { type: types.GET_RUNBOOK_STEP_SUCCESS,       config: data }; }
export function updateRunbookStepSuccess(data)    { return { type: types.UPDATE_RUNBOOK_STEP_SUCCESS,    config: data }; }
export function getApplicationGroupsSuccess(data) { return { type: types.GET_APPLICATION_GROUPS_SUCCESS, config: data }; }
export function getApplicationLinksSuccess(data)  { return { type: types.GET_APPLICATION_LINKS_SUCCESS,  config: data }; }
export function insertRfcSuccess(data)            { return { type: types.INSERT_RFC__SUCCESS,            config: data }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function getRfcs(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRfcs(request)
            .then(response => dispatch(getRfcsSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getRfc(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRfc(request)
            .then(response => dispatch(getRfcSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getRunbookTemplates(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRunbookTemplates(request)
            .then(response => dispatch(getRunbookTemplatesSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getRunbookTemplate(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRunbookTemplate(request)
            .then(response => dispatch(getRunbookTemplateSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getRunbookStep(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRunbookStep(request)
            .then(response => dispatch(getRunbookStepSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function updateRunbookStep(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.updateRunbookStep(request)
            .then(response => dispatch(updateRunbookStepSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getApplicationGroups(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getApplicationGroups(request)
            .then(response => dispatch(getApplicationGroupsSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function getApplicationLinks(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getApplicationLinks(request)
            .then(response => dispatch(getApplicationLinksSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

export function insertRfc(request) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.insertRfc(request)
            .then(response => dispatch(insertRfcSuccess(response)))
            .catch((error) => { throw (error); })
            .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

