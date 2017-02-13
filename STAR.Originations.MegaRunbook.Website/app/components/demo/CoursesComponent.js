import React, {PropTypes}   from 'react';
import {bindActionCreators} from 'redux';
import {connect}            from 'react-redux';
import {browserHistory}     from 'react-router';

import * as courseActions   from '../../actions/courseActions';

import CourseList           from './CourseList';

class CoursesComponent extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.initializeState();
        this.initializeEvents();
    }

    initializeState() {
        this.state = {
                         course: {
                                     title: ''
                                 }
                     };
    }

    initializeEvents() {
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onClickSaved   = this.onClickSaved.bind(this);
    }

    onTitleChanged(event) {

        const course = this.state.course;

        course.title = event.target.value;

        this.setState({ course: course });
    }

    onClickSaved() {
        alert(`Saving ${this.state.course.title}`);     // Note the back-`ticks`. These are NOT apostrophe's
    }

    render() {

        const { courses } = this.props;

        return (
                <div>
                    <h1>Courses</h1>
                    <input type     = 'text' 
                           onChange = { this.onTitleChanged } 
                           value    = { this.state.course.title }>
                    </input>
                    <input type      = 'submit'
                           value     = 'Save'
                           className = 'btn btn-primary'
                           onClick   = { this.onClickSaved }>
                    </input>
                </div>
            );
        }
}

export default CoursesComponent;
