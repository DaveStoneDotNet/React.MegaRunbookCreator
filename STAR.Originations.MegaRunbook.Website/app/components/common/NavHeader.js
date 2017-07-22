import React         from 'react';
import PropTypes     from 'prop-types';
import { Link }      from 'react-router';
import { IndexLink } from 'react-router';

class NavHeader extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
               <div className="navbar-root">
                   <div id="navbar" className="navbar navbar-inverse navbar-fixed-top">
                     <div className="container-fluid">
                       <div className="navbar-header">
                         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbar">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar" />
                           <span className="icon-bar" />
                           <span className="icon-bar" />
                         </button>
                         <IndexLink className="navbar-brand" to="/">MRC</IndexLink>
                       </div>
                       <div id="mainNavbar" className="navbar-collapse collapse">
                          <div className="head-runner">
                             <img src="../../app//images/running-01.gif" className={app.ajaxCount > 0 ? "show-working-head-runner" : "hide-working-head-runner"} alt="working"/>
                          </div>
                         <div className="float-right pad-top-15">
                           <span className=""><i className="fa fa-user-circle gray-5 font-1-10" /> <span style={{marginTop: "-1px"}} className="Lato font-1-00 opacity-60 pad-left-5 lowercase">{ app.user.UserDisplayName }</span></span>
                         </div>
                         <ul className="nav navbar-nav">
                           <li><IndexLink activeClassName="active" to="/">Home</IndexLink></li>
                           <li><Link activeClassName="active" to="/releases">Release</Link></li>
                           <li><Link activeClassName="active" to="/rfcs">RFCs</Link></li>
                           <li><Link activeClassName="active" to="/runbooks">Runbooks</Link></li>
                           <li><Link activeClassName="active" to="/templates">Templates</Link></li>
                           <li><Link activeClassName="active" to="/builds">Builds</Link></li>
                           <li><Link activeClassName="active" to="/applications">Applications</Link></li>
                           <li><Link activeClassName="active" to="/admin">Admin</Link></li>
                           <li><Link activeClassName="active" to="/about">About</Link></li>
                           <li><Link activeClassName="active" to="/demo">Demo</Link></li>
                         </ul>
                       </div>
                     </div>
                   </div>
               </div>
           );
    }
}

NavHeader.propTypes = {
                          app: PropTypes.object.isRequired
                      };

export default NavHeader;