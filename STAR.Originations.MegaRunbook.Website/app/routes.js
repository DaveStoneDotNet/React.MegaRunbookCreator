import React                 from 'react';
import { Route, IndexRoute } from 'react-router';

import ShellComponent        from './components/common/ShellComponent';
import HomeComponent         from './components/home/HomeComponent';
import AboutComponent        from './components/about/AboutComponent';
import NotFoundComponent     from './components/common/NotFoundComponent';

import CoursesComponent      from './components/demo/CoursesComponent';


export default (
  <Route path = "/" component = { ShellComponent }>
    <IndexRoute component = { HomeComponent }/>
    <Route path="about"   component = { AboutComponent    } />
    <Route path="courses" component = { CoursesComponent  } />
    <Route path="*"       component = { NotFoundComponent } />
  </Route>
);
