import React, { PropTypes }   from 'react';
import { Link, IndexLink }    from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

class NavHeaderComponent extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const user = this.props.user;

        return (
               <div>
                   <div id='navbar' className='navbar navbar-inverse navbar-fixed-top'>
                     <div className='container'>
                       <div className='navbar-header'>
                         <IndexLink className='navbar-brand' to='/'>MRC</IndexLink>
                       </div>
                       <div className='navbar-collapse collapse'>
                         <div className='float-right pad-top-10'>
                           <span><i className='fa fa-info-circle gray-5 font-1-40' /> <span className='BebasNeue font-1-40 opacity-60 pad-left-5'>{ user.UserDisplayName }</span></span> <span className='gray-6'>o</span>
                         </div>
                         <ul className='nav navbar-nav'>
                           <li><IndexLink activeClassName='active' to='/'>Home</IndexLink></li>
                           <li><Link activeClassName='active' to='/release'>Release</Link></li>
                           <li><Link activeClassName='active' to='/rfcs'>RFCs</Link></li>
                           <li><Link activeClassName='active' to='/runbooks'>Runbooks</Link></li>
                           <li><Link activeClassName='active' to='/templatelist'>Templates</Link></li>
                           <li><Link activeClassName='active' to='/builds'>Builds</Link></li>
                           <li><Link activeClassName='active' to='/links'>Applications</Link></li>
                           <li><Link activeClassName='active' to='/admin'>Admin</Link></li>
                           <li><Link activeClassName='active' to='/about'>About</Link></li>
                           <li><Link activeClassName='active' to='/demo'>Todo</Link></li>
                           <li><Link activeClassName='active' to='/courses'>Courses</Link></li>
                         </ul>
                       </div>
                     </div>
                   </div>
               </div>
           );
    }
}

export default NavHeaderComponent;