import React                  from 'react';
import PropTypes              from 'prop-types';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr                 from 'toastr';

import * as courseActions     from '../../state/actions/courseActions';

import CourseForm             from './CourseForm';

class ManageCoursePage extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                         course: Object.assign({ }, this.props.course),
                         errors: { },
                         saving: false
                     };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse        = this.saveCourse.bind(this);
    }

    componentWillMount () {

    }

    componentDidMount () {

    }

    componentWillReceiveProps(nextProps) {

        // Necessary to populate when existing course is loaded directly
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({
                               course: Object.assign({ }, nextProps.course)
                          });
        }
    }

    updateCourseState(event) {
        const field   = event.target.name;
        let course    = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
                          .then(() => this.redirect())
                          .catch(error => {
                              toastr.error(error);
                              this.setState({ saving: false });
                          });
    }

    redirect() {
        this.setState({ saving: false });
        toastr.success('Course saved');
        this.context.router.push('/courses');
    }

    render() {
        return (
                   <CourseForm allAuthors = { this.props.authors     }
                               onChange   = { this.updateCourseState }
                               onSave     = { this.saveCourse        }
                               course     = { this.state.course      }
                               errors     = { this.state.errors      }
                               saving     = { this.state.saving      }
                   />
               );
    }
}

ManageCoursePage.propTypes = {
                                 course:  PropTypes.object.isRequired,
                                 errors:  PropTypes.object,
                                 authors: PropTypes.array.isRequired,
                                 actions: PropTypes.object.isRequired
                             };

ManageCoursePage.contextTypes = {
                                    router: PropTypes.object.isRequired
                                };

const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0];
    return null;
};

const mapStateToProps = (state, ownProps) => {
  
    const courseId = ownProps.params.id; // From the path '/course/:id'

    let course = {id: '', watchHref:'', title: '', authorId: '', length: '', category: ''};

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
                   value: author.id,
                   text:  author.firstName + ' ' + author.lastName
               };
    });
  
    return { 
               course:  course,
               authors: authorsFormattedForDropdown
           };
};

const mapDispatchToProps = (dispatch) => {
    return {
               actions: bindActionCreators(courseActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);