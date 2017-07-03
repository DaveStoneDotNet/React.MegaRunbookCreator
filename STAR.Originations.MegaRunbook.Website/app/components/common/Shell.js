import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';

import NavHeader   from './NavHeader';
import AppFooter   from './AppFooter';
import Splash      from './Splash';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../node_modules/toastr/build/toastr.min.css';

class Shell extends React.Component {

    render() {

        // In this ShellComponent, 'user' and 'lookups' are intended to be available to 
        // all the child routing elements indirectly defined via the 'routes.js' file. 
        //
        // That is, it's desirable to have some data available to the entire application 
        // rather than just an individual component; for example, 'user' and 'lookups'.
        // 
        // Rather than treating these values separately off the root store hierarchy, 
        // an 'app' object was created with 'user' and 'lookups' properties.
        // 
        // Ordinarily, you might wire routing up as follows in the 'container' div below...
        // 
        //          { this.props.children }
        // 
        // ... however, to make the 'user' and 'lookups' available to all child routing 
        // elements by default, the 'children' should be cloned. Each child component is 
        // cloned and the 'user' and 'lookups' are 'bolted' onto the cloned elements: 
        // 
        //          React.cloneElement(child, { app: app })
        // 
        // 'user' and 'lookups' props will then be available to these child components 
        // without having to map them (e.g. 'mapStateToProps') or explicity declare them 
        // (e.g. as an attribute on a custom component).
        // 
        // 'app' is defined here off of 'this.props' since 'this.props' would not be 
        // 'visible' inside the mapping function.
        // 
        // Many times, props are passed to the child within the render method of the 
        // parent as an ATTRIBUTE.
        // 
        // However, here, using REDUX, props are obtained via the 'mapStateToProps'
        // function.
        //

        const app = this.props.app;

        return (
                  <div>
                    <Splash app={app} />
                    <NavHeader app={app} />
                    <div className='container body-content'>
                        {
                            React.Children.map(this.props.children, function(child) {
                                return React.cloneElement(child, { app: app });
                            })
                        }                        
                    </div>
                    <AppFooter app={app} />
                  </div>
               );
    }
}

Shell.propTypes = {
                      children: PropTypes.element, 
                      app:      PropTypes.object.isRequired
                  };

const mapStateToProps = (state, ownProps) => ({
    app: state.app
});

export default connect(mapStateToProps)(Shell);
