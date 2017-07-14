import React                  from 'react';
import moment                 from 'moment';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import toastr                 from 'toastr';

import * as releaseActions    from '../../state/actions/releaseActions';

import ReleaseDateHeader      from './ReleaseDateHeader';
import ReleaseBlockTable      from './ReleaseBlockTable';
import ReleaseStatusHeader    from './ReleaseStatusHeader';

class Releases extends React.Component {
    
    constructor(props, context) {

        super(props, context);

        this.state = {
                         seconds:    0, 
                         errors:     { },
                         isSaving:   false, 
                         isLoading:  false, 
                         elementCss: ''
        };

        this.staticCss = 'BebasNeue font-1-40 pad-10';
    }

    componentWillMount () {
        this.getRelease();
    }
    
    componentDidMount () {
        this.interval = setInterval(() => {
            this.updateComponent();
        }, 10500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // ------------------------------------------------------------------------------------------------

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

    updateComponent() {
        this.setState({ seconds: this.state.seconds + 1 });
        this.getRelease();
    }

    render() {
        const release = this.props.release;
        return (
                <div>
                  <div className="pad-20">

                      <ReleaseDateHeader momentHeaderDate={ moment('2017-07-08', 'YYYY-MM-DD') } startTime="08:00 PM" stopTime="01:30 AM" seconds={ this.state.seconds } />

                      <div id="main-release-container" className="row">
                          <div className="col-md-9">
                                <ReleaseBlockTable />
                          </div>
                          <div className="col-md-3">
                              <ReleaseStatusHeader releaseStatus={ release.ReleaseStatus } />
                          </div>
                      </div>
                  </div>
                </div>
               );
    }
}

const mapStateToProps = (state, ownProps) => {
  
    return { 
               release: state.release.release
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