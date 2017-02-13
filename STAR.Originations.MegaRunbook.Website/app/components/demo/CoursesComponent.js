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
// In short: Determines what properties should be available to the component as props.

const mapStateToProps = (state, ownProps) => ({
                                                   courses: state.courses
                                              });

// 'mapDispatchToProps' exposes the actions exposed to the component.

const mapDispatchToProps = (dispatch) => { 
    return {
               actions: bindActionCreators(courseActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesComponent);