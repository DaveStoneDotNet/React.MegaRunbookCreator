// OBSOLETE

import React                             from 'react';
import { render }                        from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import KanbanBoardContainer              from './containers/demo/KanbanBoardContainer';
import KanbanBoard                       from './components/demo/KanbanBoard';
import EditCard                          from './components/demo/EditCard';
import NewCard                           from './components/demo/NewCard';

import routes                            from './routes';

render((
  <Router history = { browserHistory }>
    <Route component = { KanbanBoardContainer }>
      <Route path = "/" component = { KanbanBoard }>
        <Route path = "new"           component = { NewCard  } />
        <Route path = "edit/:card_id" component = { EditCard } />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
