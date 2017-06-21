
import MrcApi     from '../../api/mockMrcApi';
import * as types from './actionTypes';

// -----------------------------------------------------------------------------------------------------------------------
// Actions:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableDataSuccess(data) { return { type: types.GET_RANDOM_TABLE_DATA_SUCCESS, randomTableData: data  }; }

// -----------------------------------------------------------------------------------------------------------------------
// Thunks:
// -----------------------------------------------------------------------------------------------------------------------

export function getRandomTableData(pageSize, page, sorted, filtered) {
    return function (dispatch) {
        return MrcApi.getRandomTableData(pageSize, page, sorted, filtered)
            .then(response => { 
                dispatch(getRandomTableDataSuccess(response)); 
            })
            .catch(error => { 
                throw (error); 
            });
    };
}

// -----------------------------------------------------------------------------------------------------------------------
