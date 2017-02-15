import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import ShellComponent        from './components/common/ShellComponent';
import HomeComponent         from './components/home/HomeComponent';
import AboutComponent        from './components/about/AboutComponent';

import AdminComponent        from './components/admin/AdminComponent';
import ApplicationsComponent from './components/applications/ApplicationsComponent';
import BuildsComponent       from './components/builds/BuildsComponent';
import ReleasesComponent     from './components/releases/ReleasesComponent';
import RfcsComponent         from './components/rfcs/RfcsComponent';
import RunbooksComponent     from './components/runbooks/RunbooksComponent';
import TemplatesComponent    from './components/templates/TemplatesComponent';

import NotFoundComponent     from './components/common/NotFoundComponent';

import CoursesComponent      from './components/demo/CoursesComponent';
import ManageCoursePage      from './components/demo/ManageCoursePage';

export default (
    <Route path = "/" component = { ShellComponent }>
    <IndexRoute component = { HomeComponent }/>
    <Route path="about"        component = { AboutComponent        } />

    <Route path="about"        component = { AboutComponent        } />
    <Route path="admin"        component = { AdminComponent        } />
    <Route path="applications" component = { ApplicationsComponent } />
    <Route path="builds"       component = { BuildsComponent       } />
    <Route path="releases"     component = { ReleasesComponent     } />
    <Route path="rfcs"         component = { RfcsComponent         } />
    <Route path="runbooks"     component = { RunbooksComponent     } />
    <Route path="templates"    component = { TemplatesComponent    } />

    <Route path="courses"      component = { CoursesComponent      } />
    <Route path="course"       component = { ManageCoursePage      } />
    <Route path="course/:id"   component = { ManageCoursePage      } />
    <Route path="*"            component = { NotFoundComponent     } />
    </Route>
);
