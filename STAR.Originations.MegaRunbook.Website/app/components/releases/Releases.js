import React                    from 'react';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import toastr                   from 'toastr';

import * as releaseActions      from '../../state/actions/releaseActions';

import { TimeSpanMode }         from '../../constants';
import { DateFormats }          from '../../constants';
import { getReleaseBlockBgCss } from '../../constants';

import TimerProgressBar         from '../common/TimerProgressBar';
import CompactContactList       from '../common/CompactContactList';

import ReleaseDateHeader        from './ReleaseDateHeader';
import ReleaseBlockTable        from './ReleaseBlockTable';
import ReleaseStatusHeader      from './ReleaseStatusHeader';
import ReleaseProgressTimers    from './ReleaseProgressTimers';
import ReleaseActivity          from './ReleaseActivity';

class Releases extends React.Component {
    
    constructor(props, context) {

        super(props, context);

        this.state = {
                         seconds:       0, 
                         errors:        { },
                         isRandomizing: true,
                         isSaving:      false, 
                         isLoading:     false, 
                         elementCss:    ''
                     };

        this.staticCss = 'BebasNeue font-1-40 pad-10';

        this.getRelease         = this.getRelease.bind(this);
        this.toggleRandomizing  = this.toggleRandomizing.bind(this);
    }

    componentWillMount () {
        this.getRelease();
    }
    
    componentDidMount () {
        this.startInterval();
    }

    componentWillUnmount() {
        this.stopInterval();
    }


    // ------------------------------------------------------------------------------------------------

    startInterval() {
        this.interval = setInterval(() => {
            this.updateComponent();
        }, 10500);
    }

    stopInterval() {
        clearInterval(this.interval);
    }

    toggleRandomizing() {
        const isRandomizing = !this.state.isRandomizing;
        this.setState({ isRandomizing: isRandomizing });
        if (isRandomizing) {
            this.startInterval();
        } else {
            this.stopInterval();
        }
    }

    getRelease(request) {
        this.setState({ isLoading: true });
        this.props.actions.releaseActions.getRelease(request)
                                         .then((response) => {
                                             console.log('RELEASE RESPONSE', response);
                                         })
                                         .catch(error => {
                                             console.log('ERROR GET RELEASE', error);
                                             toastr.error(error);
                                         })
                                         .then(() => { this.setState({ isLoading: false }); });
    }

    getActivities(request) {
        this.setState({ isLoading: true });
        this.props.actions.releaseActions.getActivities(request)
                                         .then((response) => {
                                             console.log('ACTIVITIES RESPONSE', response);
                                         })
                                         .catch(error => {
                                             console.log('ERROR GET ACTIVITIES', error);
                                             toastr.error(error);
                                         })
                                         .then(() => { this.setState({ isLoading: false }); });
    }

    updateComponent() {
        this.setState({ seconds: this.state.seconds + 1 });
        this.getRelease();
        this.getActivities({ });
    }

    render() {

        const release       = this.props.release;
        const activities    = this.props.activities;
        const contacts      = this.props.contacts;
        const bgClass       = getReleaseBlockBgCss(release.ReleaseStatus);
        const isRandomizing = this.state.isRandomizing;

        console.log('RELEASE - PROPS', this.props);
        console.log('RELEASE - RELEASE CONTACTS', contacts);

        return (
                <div>
                  <div className="pad-20">

                      <div className="pad-top-20 pad-left-10 pad-right-10 font-1-00 float-right">
                          <i className={ 'fa fa-circle-o-notch pointer white-a-1 ' + (isRandomizing ? 'fa-spin' : '') } onClick={ this.toggleRandomizing }/>
                      </div>
                      <ReleaseDateHeader releaseDate={ release.ReleaseDate } startTime={ release.ScheduledStartTime } stopTime={ release.ScheduledStopTime } seconds={ this.state.seconds } />

                      <div id="main-release-container" className="row">
                          <div className="col-md-9">
                                <ReleaseBlockTable getRelease={ this.getRelease } />
                          </div>
                          <div className="col-md-3">

                              <ReleaseStatusHeader releaseStatus={ release.ReleaseStatus } />

                              <ReleaseProgressTimers release={ release} />

                              <TimerProgressBar startTime={release.ScheduledStartTime} stopTime={release.ScheduledStopTime} bgClass={ bgClass } height="20" />

                              <div className="pad-top-10">
                                <ReleaseActivity releaseStatus={ release.ReleaseStatus } activities={ activities } />
                              </div>
                              <div className="pad-top-10">
                                <CompactContactList contacts={ contacts } />
                              </div>

                          </div>
                      </div>
                  </div>
                </div>
               );
    }
}

const mapStateToProps = (state, ownProps) => {
  
    return { 
               release:    state.release.release, 
               activities: state.release.activities, 
               contacts:   state.release.contacts
           };
};

const mapDispatchToProps = (dispatch) => { 
    return {
               actions: {
                            releaseActions: bindActionCreators(releaseActions, dispatch)
                        }
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(Releases);