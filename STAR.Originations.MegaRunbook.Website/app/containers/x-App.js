// OBSOLETE

import React, { PropTypes } from 'react';
import { Link, IndexLink }  from 'react-router';

import NavHeaderComponent   from '../components/common/NavHeaderComponent';
import AppFooterComponent   from '../components/common/AppFooterComponent';
import Loading              from '../components/common/LoadingComponent';

// This is a class-based component because the current version of hot reloading won't hot reload a stateless component at the top-level.

class App extends React.Component {
    render() {
        return (
            <div>
              <NavHeaderComponent />
              <div className="container body-content">
                  <Loading />
              </div>
              <AppFooterComponent />
            </div>
      );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
