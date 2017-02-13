import React, { PropTypes } from 'react';

import NavHeaderComponent   from './NavHeaderComponent';
import AppFooterComponent   from './AppFooterComponent';

class ShellComponent extends React.Component {
    render() {
        return (
                  <div>
                    <NavHeaderComponent />
                    <div className="container body-content">
                        { this.props.children }
                    </div>
                    <AppFooterComponent />
                  </div>
              );
    }
}

ShellComponent.propTypes = {
    children: PropTypes.element
  //children: PropTypes.object.isRequired;
};

export default ShellComponent;
