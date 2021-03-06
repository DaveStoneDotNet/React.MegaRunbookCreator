﻿import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { browserHistory }     from 'react-router';

import toastr                 from 'toastr';
import { Button }             from 'react-bootstrap';
import { Modal }              from 'react-bootstrap';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

import * as demoActions       from '../../state/actions/demoActions';
import * as appActions        from '../../state/actions/appActions';
import * as bingApiActions    from '../../state/actions/bingApiActions';

import ReleaseStatusHeader    from '../releases/ReleaseStatusHeader';

import RandomTable            from './RandomTable';
import CourseDemoTable        from './CourseDemoTable';
import CourseList             from './CourseList';
import BarChart               from './BarChart';

class Demo extends React.Component {

    constructor(props, context) {

        super(props, context);

        // ----------------------------------------------------------------------------------------------------

        this.hub = $.connection.releaseHub;

        // ----------------------------------------------------------------------------------------------------


        this.state = {
                         course:    Object.assign({ }, this.props.course),
                         errors:    { },
                         isSaving:  false, 
                         message:   '', 
                         pieColors: ['#0088FE', '#00C49F']
                     };

        toastr.options.positionClass = 'toast-bottom-right';

        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.openModal               = this.openModal.bind(this);
        this.closeModal              = this.closeModal.bind(this);
        this.getData                 = this.getData.bind(this);

        this.getBingAuthorizationToken = this.getBingAuthorizationToken.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {

        const self = this;

        this.hub.client.broadcastMessage = function (message) {
            console.log('BROADCAST MESSAGE', message);
            self.props.actions.dispatch(self.props.actions.demoActions.signalrLineDataReceived(message.LineData));
            self.props.actions.dispatch(self.props.actions.demoActions.signalrPieDataReceived(message.PieData));
            self.setState({ message: message.Message });
        };

        this.hub.client.updateStatus = (data) => {
            console.log('UPDATE STATUS', data);
        };

        this.hub.client.hello = function () {
            console.log('SIGNAL R SERVER SAYS HELLO');
        };

        $.connection.hub.start()
            .done(() => {

                console.log('SIGNALR CONNECTED VIA ', $.connection.hub.transport.name);

                if (this.hub.connection.socket) {
                    this.hub.connection.socket.onopen    = ()  => { console.log('CONNECTION OPENED'); };
                    this.hub.connection.socket.onmessage = (m) => { console.log('CONNECTION MESSAGE: ', m); };
                    this.hub.connection.socket.onclose   = ()  => { console.log('CONNECTION CLOSED'); };
                }

            })
            .fail(() => {
                 console.log('START SIGNALR CONNECTION FAILED');
            });
    }

    componentWillUnmount() {
        $.connection.hub.stop();
        console.log('DEMO COMPONENT UN-MOUNTED - SIGNAL R CONNECTION STOPPED');
    }

    signal() {

        console.log('SIGNAL Calling UpdateStatus from DEMO .......');

        this.hub.server.send('BANANA');
    }

    redirectToAddCoursePage() {
        browserHistory.push('/demo');
    }

    openModal() {
        this.setState({ show: true });
    }

    closeModal() {
        this.setState({ show: false });
    }

    getData() {
        this.setState({ isSaving: true });
        this.props.actions.appActions.getData()
                          .then(() => {
                              toastr.success('Loaded some random data', 'SUCCESS');
                              this.signal();
                          })
                          .catch((error) => { 
                              console.log('error');
                              toastr.error('error', error);
                          })
                          .then(() => {
                              this.setState({ isSaving: false });
                          });
    }

    getBingAuthorizationToken() {
        this.setState({ isSaving: true });
        this.props.actions.bingApiActions.getBingAuthorizationToken('')
                          .then(() => {
                              toastr.success('Loaded some random data', 'SUCCESS');
                              this.signal();
                          })
                          .catch((error) => { 
                              console.log('error');
                              toastr.error('error', error);
                          })
                          .then(() => {
                              this.setState({ isSaving: false });
                          });
    }

    render() {

        const courses   = this.props.demo.courses;
        const app       = this.props.app;
        const lineData  = this.props.demo.lineData;
        const pieData   = this.props.demo.pieData;
        const pieColors = this.state.pieColors;

        return (
                   <div>
                        <h1>Random Experiments</h1>

                        <Button bsStyle="info" onClick={() => this.openModal()}>Modal</Button> &nbsp;
                        <Button bsStyle="primary" disabled={this.state.isSaving} onClick={() => this.getData()}>{this.state.isSaving ? 'Getting...' : 'Get Data'}</Button>

                        <div className="pad-20">
                            INFO: {app.home.info} : { this.state.isSaving.toString() }
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

                       <div style={{ width: '402px' }} className="pad-top-20">
                           <ReleaseStatusHeader releaseStatus={ this.state.message } />
                       </div>

                       <div className="pad-20" />

                       <h1>Random D3</h1>
                       <BarChart data={[5,10,1,3]} size={[200,100]} />

                       <div className="pad-20" />

                       <h1>Random Grid</h1>
                       <input type="submit" value="Add Grid Item" className="btn btn-primary" onClick = { this.redirectToAddCoursePage } />
                       <CourseList courses = { courses } />

                       <div className="pad-20" />

                       <h1>
                          Random Table
                       </h1>
                       <div className="col-md-6 pad-top-20">
                          <RandomTable />
                       </div>

                       <div className="col-md-6 pad-top-20">
                          <CourseDemoTable />
                       </div>

                       <Modal show={this.state.show} onHide={() => this.closeModal()} container={this}>
                         <Modal.Body>
                           <div className="pad-20">
                             <h1>Modal</h1>
                             <div>
                               Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                             </div>
                             <div className="pad-top-40 align-right">
                               <Button bsStyle="info" onClick={() => this.closeModal()}>Close</Button>
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
                     demo:    PropTypes.object.isRequired
                 };

// 'mapStateToProps' defines what part of the redux store to expose to child components.
// When you define this function, it subscribes to redux store's updates.
// Each property defined will become a property of the component.
// In short, it defines an object with properties exposed to the component.
//
//      e.g. this.props.demo.courses...
//
// The 'state' parameter represents the 'state' in the redux store.
// 
// The 'state.demo' property is determined by the choice to name the property 'demo' 
// in the 'rootReducer' of index.js. In this case, 'demo' was just an 'alias' of the 
// 'demoReducer'
// 
// So if you wanted to expose the entire store could you just say { everything: state } ?
//
// 'ownProps' is useful for accessing routing-related props injected by react-router.
//

const mapStateToProps = (state) => ({
                                         demo: state.demo
                                    });

// 'mapDispatchToProps' exposes the actions exposed to the component.

const mapDispatchToProps = (dispatch) => { 
    return {
               actions: {
                            dispatch:       dispatch,
                            demoActions:    bindActionCreators(demoActions, dispatch), 
                            appActions:     bindActionCreators(appActions, dispatch), 
                            bingApiActions: bindActionCreators(bingApiActions, dispatch)
               }
           };
};

// Instead of exporting a 'plain' component...
// .. export a component that's decorated by the react-redux connect function.
// The connect function is used to interact with react-redux and can be referred to as 'container-components'.
// 
// If you OMIT the 'mapDispatchToProps' parameter, the 'connect' function injects a 'dispatch' property to 
// the component. That is, this component automatically gets a 'dispatch' property attached to it.
// The 'dispatch' function is a function which allows you to fire off the actions defined in 'demoActions.js'.
//
// To dispatch an action, a reference to actions is needed. e.g. demoActions.
// 
// The 'dispatch' function could then referenced as follows... 
//
//          this.props.dispatch(demoActions.getCourses());
// 
// This is somewhat verbose, so an alternative would be to call the 'mapDispatchToProps' function instead.
//
// It's important to note that when implementing 'mapDispatchToProps', 'dispatch' is *NOT* injected.
// 
export default connect(mapStateToProps, mapDispatchToProps)(Demo);