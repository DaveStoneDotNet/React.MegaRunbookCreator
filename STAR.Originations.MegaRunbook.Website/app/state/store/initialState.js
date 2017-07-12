
// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action - an object describing what happened.
// To specify how actions transform the state tree, you write pure reducers.

// The actual 'shape' of the store is better reflected in 'reducers/index.js' which combines all of the defined reducers into a single reducer, 
// and 'reducers/initialState.js' which is an optional, non-redux object, intended to provide default values for each defined state object.
// That is, by defining initial states here, it can be helpful to provide a picture of the full object tree in the store.

export default {
                   demo:        {
                                    authors:              [{ Id: '', FirstName: '', LastName: '' }],
                                    courses:              [{ id: '', title: '', watchHref: '', authorId: '', length: '', category: '' }], 
                                    course:               {
                                                              id:        '', 
                                                              title:     '', 
                                                              watchHref: '', 
                                                              authorId:  '', 
                                                              length:    '', 
                                                              category:  ''
                                                          }, 
                                    courseDemos:          [{ Id: '', Title: '', WatchHref: '', AuthorId: '', Length: '', Category: '' }], 
                                    courseDemo:           {
                                                              Id:        '', 
                                                              Title:     '', 
                                                              WatchHref: '', 
                                                              AuthorId:  '', 
                                                              Length:    '', 
                                                              Category:  ''
                                                          }, 
                                    courseResponse:       {}
                   },
                   release:     {
                                    release:              {
                                                              Id: 0, 
                                                              ReleaseDate:        '',
                                                              ScheduledStartTime: '',
                                                              ScheduledStopTime:  '',
                                                              ActualStartTime:    '',
                                                              ActualStopTime:     '',
                                                              ReleaseStatus:      '',
                                                              ReleaseBlocks:      []
                                                          }, 
                                    releaseBlock:         {
                                                              Id:               0, 
                                                              BlockOrder:       0, 
                                                              StepsText:        '', 
                                                              BlockType:        '', 
                                                              BlockName:        '', 
                                                              BlockDescription: '', 
                                                              StartTime:        '', 
                                                              StopTime:         '', 
                                                              BlockStatus:      '', 
                                                              BlockUsers:       [''] 
                                                          }
                   }, 
                   app:         {
                                    user:                 {
                                                              HasRole:         false, 
                                                              IsAdministrator: false, 
                                                              IsSuccessful:    false, 
                                                              PrimaryRoleName: '', 
                                                              RoleNames:       [''], 
                                                              UserDisplayName: '', 
                                                              UserId:          0, 
                                                              UserInitials:    ''
                                                          },
                                    lookups:              {
                                                              ApplicationGroups:   [{ Code: '', Description: '', SortOrder: 0 }], 
                                                              ApplicationTypes:    [{ Code: '', Description: '', SortOrder: 0 }], 
                                                              RunbookStepStatuses: [{ Code: '', Description: '', SortOrder: 0 }], 
                                                              RunbookStepTypes:    [{ Code: '', Description: '', SortOrder: 0 }], 
                                                              Teams:               [{ Id:   '', Name:        ''               }]
                                                          }, 
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
                                    randomTableData:      {
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
                                                     
                                }
               };