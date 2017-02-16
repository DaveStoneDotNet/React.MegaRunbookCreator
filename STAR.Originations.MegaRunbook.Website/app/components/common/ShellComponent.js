﻿import React, { PropTypes } from 'react';
import { connect }          from 'react-redux';

import NavHeaderComponent   from './NavHeaderComponent';
import AppFooterComponent   from './AppFooterComponent';
import SplashComponent      from './SplashComponent';

class ShellComponent extends React.Component {

    render() {

        // In this ShellComponent, 'user' and 'lookups' are intended to be available to 
        // all the child routing elements indirectly defined via the 'routes.js' file. 
        // 
        // Ordinarily, you might wire routing up as follows in the 'container' div below...
        // 
        //          { this.props.children }
        // 
        // ... however, to make the 'user' and 'lookups' available to all child routing 
        // elements by default, the 'children' should be cloned. Each child component is 
        // cloned and the 'user' and 'lookups' are 'bolted' onto the cloned elements: 
        // 
        //          React.cloneElement(child, { user: user, lookups: lookups })
        // 
        // 'user' and 'lookups' props will then be available to these child components 
        // without having to map them (e.g. 'mapStateToProps') or explicity declare them 
        // (e.g. as an attribute on a custom component).
        // 
        // 'user' and 'lookups' are defined here off of 'this.props' since 'this.props' 
        // would not be 'visible' inside the mapping function.
        // 
        // Many times, props are passed to the child within the render method of the 
        // parent as an ATTRIBUTE.
        // 
        // However, here, using REDUX, props are obtained via the 'mapStateToProps'
        // function.
        //

        const app     = this.props.app;
        const user    = this.props.user;
        const lookups = this.props.lookups;

        return (
                  <div>
                    <SplashComponent app = { app} />
                    <NavHeaderComponent user = { user } />
                    <div className = 'container body-content'>
                        {
                            React.Children.map(this.props.children, function(child) {
                                return React.cloneElement(child, { user: user, lookups: lookups });
                            })
                        }                        
                    </div>
                    <AppFooterComponent />
                  </div>
               );
    }
}

ShellComponent.propTypes = {
                               children: PropTypes.element, 
                               user:     PropTypes.object.isRequired, 
                               lookups:  PropTypes.object.isRequired
                           };

const mapStateToProps = (state, ownProps) => ({
    app:     state.app,
    user:    state.user, 
    lookups: state.lookups
});

export default connect(mapStateToProps)(ShellComponent);
