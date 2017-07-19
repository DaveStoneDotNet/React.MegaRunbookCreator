Spent long, painful, weekend attempting to upgrade to React Router Redux Version 4.

In the end, decided to undo all changes.

Had it sort-of, kinda working based on the changes below.

May revisit at a later date.

---

Updated all the react bits to latest:

                       "react":              "15.6.1",
                       "react-bootstrap":    "0.31.0",
                       "react-dom":          "15.6.1",
                       "react-moment":       "0.4.2",
                       "react-redux":        "5.0.5",
                       "react-router":       "4.1.1",
                       "react-router-dom":   "4.1.1",
                       "react-router-redux": "4.0.8",
                       "react-table":        "6.4.0",
                       "recharts":           "1.0.0-alpha.1",
                       "redux":              "3.7.1",
                       "redux-thunk":        "2.2.0", 

---

e.g. Shell.js

Add 'withRouter' to all connected components:

```javascript

	import { withRouter } from 'react-router-dom'
	. . .
	export default withRouter(connect(mapStateToProps)(Shell));

```

---

e.g. NavHeader.js

'IndexLink' is obsolete. Remove all instances. 
'activeClassName' appears obsolete. Remove all instances. Don't know the replacement yet.

Change all 'Link' elements to reference 'react-router-dom' instead of 'react-router'.

	BEFORE: import { Link }  from 'react-router';
	AFTER:  import { Link }  from 'react-router-dom';

---

e.g. ManageCoursePage.js

Reference url parameters with addition of 'match' property:

	BEFORE: const courseId = this.props.params.id;
	AFTER:  const courseId = this.props.match.params.id;

---

e.g. state\reducer\index.js

(Probably not necessary)

	BEFORE: import { routerReducer }           from 'react-router-redux';
	AFTER:  import { routerReducer as routing} from 'react-router-redux';

	BEFORE: routing:    routerReducer, 
	AFTER:  routing:    routing, 

---

e.g. app.js

Extensive changes. Entire file listed below.

```javascript

/* eslint-disable import/default */

import React                       from 'react';
import { render }                  from 'react-dom';
import { Provider }                from 'react-redux';
import { Route }                   from 'react-router';
import { Switch }                  from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { syncHistoryWithStore }    from 'react-router-redux';
import { createBrowserHistory }    from 'history';

import routes                      from './routes';
import configureStore              from './state/store/configureStore';

import * as demoActions            from './state/actions/demoActions';
import * as authorActions          from './state/actions/authorActions';
import * as appActions             from './state/actions/appActions';

import Shell                       from './components/common/Shell';
import Home                        from './components/home/Home';
import About                       from './components/about/About';
import Admin                       from './components/admin/Admin';
import Applications                from './components/applications/Applications';
import Builds                      from './components/builds/Builds';
import Rfcs                        from './components/rfcs/Rfcs';
import Runbooks                    from './components/runbooks/Runbooks';
import Templates                   from './components/templates/Templates';
import NotFound                    from './components/common/NotFound';
import Demo                        from './components/demo/Demo';
import ManageCoursePage            from './components/demo/ManageCoursePage';

// Import babel-polyfill to support Object.assign functions for deep-cloning of immutable objects.
// Babel does not support Object.assign by default, so a pollyfill is needed.
// 
//      e.g. Object.assign({}, state, { someProperty: 'some value' });

import 'babel-polyfill';

// The whole state of your app is stored in an object tree inside a single store.
// The only way to change the state tree is to emit an action, an object describing what happened.
// To specify how the actions transform the state tree, you write pure reducers.

const store = configureStore();

store.dispatch(demoActions.getCourses());
store.dispatch(appActions.getUser());
store.dispatch(appActions.getLookups());
store.dispatch(authorActions.getAuthorLookups());

//store.subscribe(() =>
//    console.log(store.getState())
//);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
  <Provider store = { store }>
    <Router history = { history } onUpdate = { () => window.scrollTo(0, 0) }>
        <Shell>
            <Switch>
                <Route path="/"             component={ Home             } exact={true} />
                <Route path="/about"        component={ About            }              />
                <Route path="/admin"        component={ Admin            }              />
                <Route path="/applications" component={ Applications     }              />
                <Route path="/builds"       component={ Builds           }              />
                <Route path="/rfcs"         component={ Rfcs             }              />
                <Route path="/runbooks"     component={ Runbooks         }              />
                <Route path="/templates"    component={ Templates        }              />
                                                                                       
                <Route path="/demo"         component={ Demo             }              />
                <Route path="/course"       component={ ManageCoursePage }              />
                <Route path="/course/:id"   component={ ManageCoursePage }              />
                <Route path="*"             component={ NotFound         }              />
            </Switch>
        </Shell>
    </Router>
  </Provider>, document.getElementById('app')
);

```

---

e.g. route.js

Extensive changes. Entire file listed below.

```javascript
import React            from 'react';
import { Route }        from 'react-router';
import { IndexRoute }   from 'react-router';
import { Switch }       from 'react-router';

import Shell            from './components/common/Shell';
import Home             from './components/home/Home';
import About            from './components/about/About';
import Admin            from './components/admin/Admin';
import Applications     from './components/applications/Applications';
import Builds           from './components/builds/Builds';
import Rfcs             from './components/rfcs/Rfcs';
import Runbooks         from './components/runbooks/Runbooks';
import Templates        from './components/templates/Templates';
import NotFound         from './components/common/NotFound';
import Demo             from './components/demo/Demo';
import ManageCoursePage from './components/demo/ManageCoursePage';

export default (
    <Route path = "/"             component = { Shell            }>
      
      <Route path="/"             component = { Home             } />
      <Route path="/about"        component = { About            } />
      <Route path="/admin"        component = { Admin            } />
      <Route path="/applications" component = { Applications     } />
      <Route path="/builds"       component = { Builds           } />
      <Route path="/rfcs"         component = { Rfcs             } />
      <Route path="/runbooks"     component = { Runbooks         } />
      <Route path="/templates"    component = { Templates        } />
      
      <Route path="/demo"         component = { Demo             } />
      <Route path="/course"       component = { ManageCoursePage } />
      <Route path="/course/:id"   component = { ManageCoursePage } />
      <Route path="*"             component = { NotFound         } />
    </Route>
);

```