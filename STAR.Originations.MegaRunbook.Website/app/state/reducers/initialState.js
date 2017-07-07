
// OBSOLETE - MOVED TO STORE FOLDER


// --------------------------------------------------------------------------------------------------------------
// SomeData

// 	Id	int
// 	Name	varchar(50)
// 	etc	...

// ------------------------------------t--------------------------------------------------------------------------
// SomeDataAccess.cs

//         public async Task<contracts::SomeData> GetDataAsync(SomeRequest request)
//         {
//             var stopwatch = DataAccessBase.StartStopwatch();
//             using (var context = this.contextCreator())
//             {
//                 var query = context.SomeData.AsQueryable();

//                 query = query.Where(o => o.Id == request.id);

//                 var data = await query.Select(a => a).FirstOrDefaultAsync().ConfigureAwait(false);

//                 var mapped = Mapper.Map<entities::SomeData, contracts::SomeData>(data);

//                 this.TraceSource.TraceEvent(TraceEventType.Information, String.Format("COMPLETE: ID: {0}.", id), stopwatch.Elapsed, TraceStatus.Success);

//                 return mapped;
//             }
//         }

// --------------------------------------------------------------------------------------------------------------
// ApiController.cs

//         [System.Web.Http.HttpGet]
//         public JsonResult GetData(SomeRequest request)
//         {
//             var response = await this.SomeDataAccess.GetDataAsync(request);
//             return this.JsonDateResult(response);
//         }


// --------------------------------------------------------------------------------------------------------------
// someApi.js

//     static getData(request) {
//         return fetch('/api/GetData',
//                {
//                    headers: API_HEADERS, 
//                    method:  'POST', 
//                    body:    JSON.stringify(request)
//                })
//                .then((response) => response.json());
//     }


// --------------------------------------------------------------------------------------------------------------
// actionTypes.js
// export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';


// --------------------------------------------------------------------------------------------------------------
// someActions.js

// export function getDataSuccess(value) { return { type: types.GET_DATA_SUCCESS, data: value }; }


// --------------------------------------------------------------------------------------------------------------
// someActions.js

// export function getData(request) {
//     return function(dispatch) {
//         dispatch(ajaxActions.beginAjaxCall());
//         const promise = Api.getData(request)
//                               .then(response => {
//                                      dispatch(ajaxActions.endAjaxCall());
//                                      return dispatch(getDataSuccess(response));
//                                  }
//                               );
//         return promise;
//     };
// };


// --------------------------------------------------------------------------------------------------------------
// someReducer.js

//         case types.GET_DATA_SUCCESS:
//             new_state = Object.assign({}, state, { data: action.data });
//             return new_state;



// --------------------------------------------------------------------------------------------------------------
// app.js

// store.dispatch(someActions.getData());


// --------------------------------------------------------------------------------------------------------------
// someComponent.js

// const mapDispatchToProps = (dispatch) => {
//     return {
//                actions: bindActionCreators(someActions, dispatch)
//            };
// };

//     getData(request) {
//         this.setState({ isLoading: true });
//         this.props.actions.getData(request)
//                           .then((response) => {
//                               this.setState({ data: Object.assign({ }, response.data) });
//                           })
//                           .catch(error => {
//                               console.log('ERROR GET DATA');
//                               toastr.error(error);
//                               this.setState({ isLoading: false });
//                           });
//     }





