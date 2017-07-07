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
                         course:    Object.assign({ }, this.props.demo.course),
                         errors:    { },
                         isSaving:  false, 
                         isLoading: false
                     };

        toastr.options.positionClass = 'toast-bottom-right';

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse        = this.saveCourse.bind(this);
        this.getCourse         = this.getCourse.bind(this);
    }

    componentWillMount () {
        const courseId = this.props.params.id;
        this.getCourse(courseId);
    }

    componentDidMount () {
    }

    componentWillReceiveProps(nextProps) {
        // Necessary to populate when existing course is loaded directly
        //if (this.props.course.id !== nextProps.course.id) {
        //    this.setState({
        //                       course: Object.assign({ }, nextProps.course)
        //                  });
        //}
    }

    updateCourseState(event) {
        const field   = event.target.name;
        let course    = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course: course });
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({ isSaving: true });
        this.props.actions.saveCourse(this.state.course)
                          .then(() => this.redirect())
                          .catch(error => {
                              toastr.error(error);
                              this.setState({ isSaving: false });
                          });
    }

    getCourse(courseId) {
        this.setState({ isLoading: true });
        this.props.actions.getCourse(courseId)
                          .then((response) => {
                              this.setState({ course: Object.assign({ }, response.course) });
                          })
                          .catch(error => {
                              console.log('ERROR GET COURSE');
                              toastr.error(error);
                              this.setState({ isLoading: false });
                          });
    }

    redirect() {
        this.setState({ isSaving: false });
        toastr.success('Course saved');
        this.context.router.push('/demo');
    }

    render() {
        return (
                   <CourseForm course     = { this.state.course      }
                               allAuthors = { this.props.authors     }
                               onSave     = { this.saveCourse        }
                               onChange   = { this.updateCourseState }
                               isSaving   = { this.state.isSaving    }
                               errors     = { this.state.errors      }
                   />
               );
    }
}

ManageCoursePage.propTypes    = {
                                    demo:    PropTypes.object.isRequired,
                                    errors:  PropTypes.object,
                                    authors: PropTypes.array.isRequired,
                                    actions: PropTypes.object.isRequired
                                };

ManageCoursePage.contextTypes = {
                                    router: PropTypes.object.isRequired
                                };

const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id === id);
    if (course) return course[0];
    return null;
};

const mapStateToProps = (state, ownProps) => {
  
    const authorsFormattedForDropdown = state.demo.authors.map(author => {
        return {
                   value: author.Id,
                   text:  author.FirstName + ' ' + author.LastName
               };
    });

    return { 
               demo:    state.demo,
               authors: authorsFormattedForDropdown
           };
};

const mapDispatchToProps = (dispatch) => {
    return {
               actions: bindActionCreators(courseActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);