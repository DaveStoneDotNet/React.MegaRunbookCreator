import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import * as courseActions     from '../../actions/courseActions';

import CourseList             from './CourseList';

class CoursesComponent extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return (
                 <div key={ index }>{ course.title }</div>
               );
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {

        const { courses } = this.props;

        return (
                   <div>
                       <h1>Courses</h1>
                       <input type      = 'submit'
                              value     = 'Add Course'
                              className = 'btn btn-primary'
                              onClick   = { this.redirectToAddCoursePage }
                       />
                       <CourseList courses = { courses } />
                   </div>
               );
    }
}

CoursesComponent.propTypes = {
                                 actions: PropTypes.object.isRequired,
                                 courses: PropTypes.array.isRequired
                             };


// 'mapStateToProps' defines what part of the redux store to expose to child components.
// When you define this function, it subscribes to redux store's updates.
// Each property defined will become a property of the component.
// In short, it defines an object with properties exposed to the component.
//
//      e.g. this.props.courses...
//
// The 'state' parameter represents the 'state' in the redux store.
// 
// The 'state.courses' property is determined by the choice to name the property 'courses' 
// in the 'rootReducer' of index.js. In this case, 'courses' was just an 'alias' of the 
// 'courseReducer'
// 
// So if you wanted to expose the entire store could you just say { everything: state } ?
//
// 'ownProps' is useful for accessing routing-related props injected by react-router.
//

const mapStateToProps = (state, ownProps) => ({
                                                   courses: state.courses
                                              });

// 'mapDispatchToProps' exposes the actions exposed to the component.

const mapDispatchToProps = (dispatch) => { 
    return {
               actions: bindActionCreators(courseActions, dispatch)
           };
};

// Instead of exporting a 'plain' component...
// .. export a component that's decorated by the react-redux connect function.
// The connect function is used to interact with react-redux and can be referred to as 'container-components'.
// 
// If you OMIT the 'mapDispatchToProps' parameter, the 'connect' function injects a 'dispatch' property to 
// the component. That is, this component automatically gets a 'dispatch' property attached to it.
// The 'dispatch' function is a function which allows you to fire off the actions defined in 'courseActions.js'.
//
// To dispatch an action, a reference to actions is needed. e.g. courseActions.
// 
// The 'dispatch' function could then referenced as follows... 
//
//          this.props.dispatch(courseActions.loadCourses());
// 
// This is somewhat verbose, so an alternative would be to call the 'mapDispatchToProps' function instead.
//
// It's important to note that when implementing 'mapDispatchToProps', 'dispatch' is *NOT* injected.
// 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesComponent);