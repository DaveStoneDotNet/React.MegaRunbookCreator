import React            from 'react';
import { Route }        from 'react-router';
import { IndexRoute }   from 'react-router';

import Shell            from './components/common/Shell';
import Home             from './components/home/Home';
import About            from './components/about/About';
import Admin            from './components/admin/Admin';
import Applications     from './components/applications/Applications';
import Builds           from './components/builds/Builds';
import Releases         from './components/releases/Releases';
import Rfcs             from './components/rfcs/Rfcs';
import Runbooks         from './components/runbooks/Runbooks';
import Templates        from './components/templates/Templates';
import NotFound         from './components/common/NotFound';
import Demo             from './components/demo/Demo';
import ManageCoursePage from './components/demo/ManageCoursePage';

export default (
    <Route path = "/"            component = { Shell            }>
      <IndexRoute                component = { Home             } />
      
      <Route path="about"        component = { About            } />
      <Route path="admin"        component = { Admin            } />
      <Route path="applications" component = { Applications     } />
      <Route path="builds"       component = { Builds           } />
      <Route path="releases"     component = { Releases         } />
      <Route path="rfcs"         component = { Rfcs             } />
      <Route path="runbooks"     component = { Runbooks         } />
      <Route path="templates"    component = { Templates        } />
      
      <Route path="demo"         component = { Demo             } />
      <Route path="course"       component = { ManageCoursePage } />
      <Route path="course/:id"   component = { ManageCoursePage } />
      <Route path="*"            component = { NotFound         } />
    </Route>
);
