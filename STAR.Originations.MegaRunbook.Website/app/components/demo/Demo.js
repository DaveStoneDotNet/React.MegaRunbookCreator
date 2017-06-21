﻿import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import toastr                 from 'toastr';
import { Button }             from 'react-bootstrap';
import { Modal }              from 'react-bootstrap';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'recharts';

import * as courseActions     from '../../state/actions/courseActions';
import * as appActions        from '../../state/actions/appActions';

import RandomTable            from './RandomTable';
import CourseList             from './CourseList';

class Demo extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            course: Object.assign({ }, this.props.course),
            errors: { },
            isSaving: false
        };

        toastr.options.positionClass = 'toast-bottom-right';

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return (
                 <div key={ index }>{ course.title }</div>
               );
    }

    redirectToAddCoursePage() {
        browserHistory.push('/demo');
    }

    render() {

        const courses = this.props.courses;
        const app     = this.props.app;

        let openModel = () => {
            this.setState({ show: true });
        };

        let closeModal = () => {
            this.setState({ show: false });
        };

        let getData = () => {
            this.setState({ isSaving: true });
            this.props.actions.appActions.getData()
                              .then(() => {
                                  toastr.success('Loaded some random data', 'SUCCESS');
                              })
                              .catch((error) => { 
                                  toastr.success('error');
                              })
                              .then(() => {
                                  this.setState({ isSaving: false });
                              });
        };

        // ---

        const lineData = [
                           {xname: ' ', uv: 4000, pv: 2400, amt: 2400},
                           {xname: ' ', uv: 3000, pv: 1398, amt: 2210},
                           {xname: ' ', uv: 2000, pv: 9800, amt: 2290},
                           {xname: ' ', uv: 2780, pv: 3908, amt: 2000},
                           {xname: ' ', uv: 1890, pv: 4800, amt: 2181},
                           {xname: ' ', uv: 2390, pv: 3800, amt: 2500},
                           {xname: ' ', uv: 3490, pv: 4300, amt: 2100},
        ];

        const pieData = [
                          {key: 'A', name: 'A', value: 400}, 
                          {key: 'B', name: 'B', value: 200}
                        ];
              
        const pieColors = ['#0088FE', '#00C49F'];

        return (
                   <div>
                        <h1>Random Experiments</h1>

                        <Button bsStyle="info" onClick={() => openModel()}>Modal</Button> &nbsp;
                        <Button bsStyle="primary" disabled={this.state.isSaving} onClick={() => getData()}>{this.state.isSaving ? 'Getting...' : 'Get Data'}</Button>

                        <div className="pad-20">
                            INFO: {app.home.info} : { this.state.isSaving.toString() }
                        </div>

                            <div>
                              Random Graphs
                            </div>
                            <table className="border">
                              <tbody>
                                <tr>
                                  <td>
                                    <div>
                                      <LineChart width={200} height={200} data={lineData} margin={{ top: 30, right: 20, left: 30, bottom: 0 }}>
                                    <XAxis dataKey="xname" />
                                    <Tooltip />
                                    <CartesianGrid stroke="#444444" />
                                    <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                                    <Line type="monotone" dataKey="pv" stroke="#0088FE" yAxisId={1} />
                                  </LineChart>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
                                    <Pie data={pieData} dataKey="value" cx={100} cy={100} labelLine={false} outerRadius={80} fill="#8884d8">
                                    {
                                         pieData.map((entry, index) => <Cell key={index} fill={pieColors[index % pieColors.length]}/>)
                                    }
                                    </Pie>
                                  </PieChart>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                       </table>

                       <div className="pad-20" />

                       <h1>Random Grid</h1>
                       <input type='submit' value='Add Grid Item' className='btn btn-primary' onClick = { this.redirectToAddCoursePage } />
                       <CourseList courses = { courses } />

                       <div className="pad-20" />

                       <h1>
                          Random Table
                       </h1>
                       <div className="col-md-6 pad-top-20">
                          <RandomTable />
                       </div>

                       <Modal show={this.state.show} onHide={closeModal} container={this}>
                         <Modal.Body>
                           <div className="pad-20">
                             <h1>Modal</h1>
                             <div>
                               Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                             </div>
                             <div className="pad-top-40 align-right">
                               <Button bsStyle="info" onClick={closeModal}>Close</Button>
                             </div>
                           </div>
                         </Modal.Body>
                       </Modal>

                   </div>
               );
    }
}

Demo.propTypes = {
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
               actions: {
                            courseActions: bindActionCreators(courseActions, dispatch), 
                            appActions:    bindActionCreators(appActions, dispatch)
                        }
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
//          this.props.dispatch(courseActions.getCourses());
// 
// This is somewhat verbose, so an alternative would be to call the 'mapDispatchToProps' function instead.
//
// It's important to note that when implementing 'mapDispatchToProps', 'dispatch' is *NOT* injected.
// 
export default connect(mapStateToProps, mapDispatchToProps)(Demo);