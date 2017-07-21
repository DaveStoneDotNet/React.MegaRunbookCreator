import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import ReactHowler            from 'react-howler'

import { ReleaseBlockStatus}  from '../../constants';
import * as appActions        from '../../state/actions/appActions';

import ReleaseBlockTableRow   from './ReleaseBlockTableRow';

class ReleaseBlockTable extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
                         isWorking:           false, 
                         isPlaying:           false,
                         selectedBlockStatus: '', 
                         openQuery:           ''
                     };

        this.handleStatusBarButtonClick = this.handleStatusBarButtonClick.bind(this);
        this.onInputChange              = this.onInputChange.bind(this);
        this.clearOpenQueryClick        = this.clearOpenQueryClick.bind(this);
        this.setNextReleaseBlockStatus  = this.setNextReleaseBlockStatus.bind(this);
        this.stopPlaying                = this.stopPlaying.bind(this);

        this.getRelease = props.getRelease;
    }

    startPlaying() {
        this.setState({ isPlaying: true });
        console.log('START PLAYING');
    }

    stopPlaying() {
        this.setState({ isPlaying: false });
        console.log('STOP PLAYING');
    }

    setNextReleaseBlockStatus(blockStatus) {
        const request = {
                            webhookurl: this.props.config.SlackWebhookUrl, 
                            message:    blockStatus
                        };
        console.log('UPDATE RELEASE BLOCK STATUS ALL THE WAY UP IN THE TABLE', request);
        this.props.actions.appActions.postSlackMessage(request);
        this.startPlaying();
    }

    getRequest() {
        return {
                   BlockStatus: this.state.blockStatus, 
                   OpenQuery:   this.state.openQuery
               };
    }

    clearOpenQueryClick() {
        if (this.state.openQuery.length > 0) {
            this.setState({ openQuery: '' }, () => {
                const request = this.getRequest();
                this.getRelease(request);
                this.openQueryInputElement.focus();
            });
        }
    }

    handleStatusBarButtonClick(blockStatus) {
        this.setState({ blockStatus: blockStatus }, () => {
            const request = this.getRequest();
            this.getRelease(request);
        });
    }

    onInputChange(e) {
        this.setState({ openQuery: e.target.value}, () => {
            const request = this.getRequest();
            this.getRelease(request);
        });
    }

    render() {

        const release    = this.props.release;
        const openQuery  = this.state.openQuery;
        const searchIcon = this.state.openQuery.length > 0 ? 'fa-times' : 'fa-search';
        const isPlaying  = this.state.isPlaying;
        return (
            <div>
                <div className="width-100 border pad-5 margin-bottom-1">
                    <div className="btn-group" role="group">
                        <button type="button" onClick={() => this.handleStatusBarButtonClick('')}                            className="btn btn-sm btn-primary" autoFocus="true">All</button>
                        <button type="button" onClick={() => this.handleStatusBarButtonClick('')}                            className="btn btn-sm btn-primary">Mine</button>
                        <button type="button" onClick={() => this.handleStatusBarButtonClick('')}                            className="btn btn-sm btn-primary">Selected</button>

                        <button type="button" onClick={() => this.handleStatusBarButtonClick(ReleaseBlockStatus.Started)}    className="btn btn-sm btn-info">In Progress</button>
                        <button type="button" onClick={() => this.handleStatusBarButtonClick(ReleaseBlockStatus.NotStarted)} className="btn btn-sm btn-info">Not Started</button>
                        <button type="button" onClick={() => this.handleStatusBarButtonClick(ReleaseBlockStatus.Warning)}    className="btn btn-sm btn-info">Warning</button>
                        <button type="button" onClick={() => this.handleStatusBarButtonClick(ReleaseBlockStatus.Critical)}   className="btn btn-sm btn-info">Critical</button>
                    </div>
                    <div className="float-right">
                        <div className="border">
                            <input autoFocus type="text" ref={(element) => { this.openQueryInputElement = element; }} className="white-a-1-bg pad-5" style={{ border: 'none' }} onChange={ this.onInputChange } value={ this.state.openQuery } /> <i className={ 'fa pad-left-5 pad-right-10 pointer ' + searchIcon } onClick={() => this.clearOpenQueryClick()} ></i>
                        </div>
                    </div>
                    <div className="float-right">
                        <div className="pad-top-2 pad-right-10 BebasNeue white-a-5 pointer" title="clear search filter">
                            All Tasks
                        </div>
                    </div>
                </div>
                <table className="font-0-90 width-100">
                    <thead>
                        <tr>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Select
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Steps
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10" colSpan="2">
                                Release Tasks
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Duration
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 align-center">
                                Start
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                End
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg border-bottom-a-10" colSpan="2">
                                Status
                            </th>
                            <th className="pad-10 white-a-1-bg gray-b border-bottom-a-10">
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            { release.ReleaseBlocks.map((releaseBlock) => <ReleaseBlockTableRow key={ releaseBlock.Id } releaseBlock={ releaseBlock } setNextReleaseBlockStatus={ this.setNextReleaseBlockStatus } /> ) }
                    </tbody>
                </table>
                <ReactHowler src='app/audio/started_01.mp3' playing={isPlaying} preload={true} onEnd={ this.stopPlaying } />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return { 
               config:  state.app.config,
               release: state.release.release
           };
}

const mapDispatchToProps = (dispatch) => { 
    return {
        actions: {
            dispatch:   dispatch,
            appActions: bindActionCreators(appActions, dispatch), 
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseBlockTable);