import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import ReactHowler            from 'react-howler';

import toastr                 from 'toastr';

import { LineChart, Line, XAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

import { ReleaseBlockStatus } from '../../constants';

import * as demoActions       from '../../state/actions/demoActions';
import * as appActions        from '../../state/actions/appActions';
import * as bingApiActions    from '../../state/actions/bingApiActions';

import ReleaseStatusHeader    from '../releases/ReleaseStatusHeader';

class CompactReleaseStatus extends React.Component {

    constructor(props, context) {

        super(props, context);

        // ----------------------------------------------------------------------------------------------------

        this.hub = $.connection.releaseHub;

        // ----------------------------------------------------------------------------------------------------

        this.state = {
                         errors:      {},
                         isPlaying:   false,
                         audioSource: 'pop_01.mp3', 
                         message:     '',
                         pieColors:   ['#0088FE', '#00C49F']
                     };

        toastr.options.positionClass = 'toast-bottom-right';

        this.getBingAuthorizationToken = this.getBingAuthorizationToken.bind(this);
        this.stopPlaying = this.stopPlaying.bind(this);
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

            // SPEAK HERE
            self.speak(message.Message);
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

    startPlaying() {
        this.setState({ isPlaying: true });
        console.log('START PLAYING');
    }

    stopPlaying() {
        this.setState({ isPlaying: false });
        console.log('STOP PLAYING');
    }

    speak(blockStatus) {

        let src = 'pop_01.mp3';

        switch (blockStatus) {
            case ReleaseBlockStatus.Done:
                src = 'done_01.mp3';
                break;
            case ReleaseBlockStatus.Started:
                src = 'started_01.mp3';
                break;
            case ReleaseBlockStatus.Warning:
                src = 'warning_01.mp3';
                break;
            case ReleaseBlockStatus.Critical:
                src = 'critical_01.mp3';
                break;
            case ReleaseBlockStatus.Late:
                src = 'late_01.mp3';
                break;
            case ReleaseBlockStatus.NotStarted:

                break;
            default:

                break;
        }

        this.setState({ audioSource: src }, () => { this.startPlaying(); });
    }

    getBingAuthorizationToken() {
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

            });
    }

    render() {

        const lineData    = this.props.demo.lineData;
        const pieData     = this.props.demo.pieData;
        const pieColors   = this.state.pieColors;
        const isPlaying   = this.state.isPlaying;
        const audioSource = this.state.audioSource;

        return (
            <div className="align-center">

                <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <LineChart width={150} height={150} data={lineData} margin={{ top: 30, right: 20, left: 30, bottom: 0 }}>
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
                                    <PieChart width={150} height={150} onMouseEnter={this.onPieEnter}>
                                        <Pie data={pieData} dataKey="value" cx={75} cy={75} labelLine={false} outerRadius={50} fill="#8884d8">
                                            {
                                                pieData.map((entry, index) => <Cell key={index} fill={pieColors[index % pieColors.length]} />)
                                            }
                                        </Pie>
                                    </PieChart>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="pad-top-20 width-100">
                                    <ReleaseStatusHeader releaseStatus={this.state.message} />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <ReactHowler src={'app/audio/' + audioSource} playing={isPlaying} preload={true} onEnd={this.stopPlaying} />

            </div>
        );
    }
}

CompactReleaseStatus.propTypes = {
                                     actions: PropTypes.object.isRequired,
                                     demo:    PropTypes.object.isRequired
                                 };

const mapStateToProps = (state) => ({
                                        demo: state.demo
                                    });

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

export default connect(mapStateToProps, mapDispatchToProps)(CompactReleaseStatus);