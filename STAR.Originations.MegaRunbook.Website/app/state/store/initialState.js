
// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action - an object describing what happened.
// To specify how actions transform the state tree, you write pure reducers.

// The actual 'shape' of the store is better reflected in 'reducers/index.js' which combines all of the defined reducers into a single reducer, 
// and 'reducers/initialState.js' which is an optional, non-redux object, intended to provide default values for each defined state object.
// That is, by defining initial states here, it can be helpful to provide a picture of the full object tree in the store.

export default {
                   authors: [],
                   courses: [],
                   app:     {
                                user:                 {},
                                lookups:              {},
                                home:                 {
                                                          info: 'INITIAL MONKEY INFO'
                                                      }, 
                                ajaxCount:            0, 
                                ajaxMessage:          'Working...', 
                                isUserInitialized:    false, 
                                isLookupsInitialized: false, 
                                isAppInitialized:     false
                            }, 
                    randomData: {
                                    randomTableData: {
                                                        data:    [
                                                                  {
                                                                    id:         0, 
                                                                    age:        0,
                                                                    firstName:  '',
                                                                    lastName:   '', 
                                                                    createDate: new Date()
                                                                  }
                                                                 ], 
                                                        pages:   0, 
                                                        loading: false
                                                     }
                                                     
                                }, 
                   ajaxCallsInProgress:  0
               };