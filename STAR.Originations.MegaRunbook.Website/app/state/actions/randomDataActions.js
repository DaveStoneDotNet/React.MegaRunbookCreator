
import MrcApi           from '../../api/mockMrcApi';
import * as types       from './actionTypes';
import * as ajaxActions from './ajaxStatusActions';

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableDataSuccess(data) { return { type: types.GET_RANDOM_TABLE_DATA_SUCCESS, randomTableData: data  }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableData(pageSize, page, sorted, filtered) {
    return function (dispatch) {
        dispatch(ajaxActions.beginAjaxCall());
        return MrcApi.getRandomTableData(pageSize, page, sorted, filtered)
                     .then(response => dispatch(getRandomTableDataSuccess(response)))
                     .catch(error   => { throw (error); })
                     .then(()       => dispatch(ajaxActions.endAjaxCall()));
    };
}

// -----------------------------------------------------------------------------------------------------------------------
