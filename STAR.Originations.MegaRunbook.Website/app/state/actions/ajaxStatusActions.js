import * as types from './actionTypes';

export function beginAjaxCall(ajaxCount) { return { type: types.BEGIN_AJAX_CALL, ajaxCount: ajaxCount }; }
export function endAjaxCall(ajaxCount)   { return { type: types.END_AJAX_CALL,   ajaxCount: ajaxCount }; }
export function ajaxCallError(ajaxCount) { return { type: types.AJAX_CALL_ERROR, ajaxCount: ajaxCount }; }

