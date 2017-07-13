import React                  from 'react';
import moment                 from 'moment';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import classNames             from 'classnames';
import toastr                 from 'toastr';

import * as releaseActions    from '../../state/actions/releaseActions';
import ReleaseDateHeader      from './ReleaseDateHeader';
import ReleaseBlockTable      from './ReleaseBlockTable';

import { css }                from '../../constants';

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

        console.log('MONKIES MONKIES MONKIES MONKIES MONKIES MONKIES MONKIES ', css.monkey);
    }

    componentWillMount () {
        this.getReleaseBlock(1);
        this.getRelease();
    }
    
    componentDidMount () {
        this.interval = setInterval(() => {
            this.updateComponent();
        }, 5500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // ------------------------------------------------------------------------------------------------

    getReleaseBlock(blockId) {
        this.setState({ isLoading: true });
        this.props.actions.releaseActions.getReleaseBlock(blockId)
                                         .then((response) => {
                                             this.setState({
                                                               elementCss: classNames(this.staticCss, response.releaseBlock.BlockStatusCss)
                                                           });
                                             console.log('RELEASE BLOCK RESPONSE', this.state);
                                             console.log('RELEASE BLOCK STATE', this.state);
                                         })
                                         .catch(error => {
                                             console.log('ERROR GET RELEASE BLOCK', error);
                                             toastr.error('ERROR');
                                         })
                                         .then(() => { this.setState({ isLoading: false }); });
    }

    getRelease(request) {
        this.setState({ isLoading: true });
        this.props.actions.releaseActions.getRelease(request)
                                         .then((response) => {
                                             console.log('RELEASE RESPONSE', response);
                                         })
                                         .catch(error => {
                                             console.log('ERROR GET RELEASE');
                                             toastr.error(error);
                                         })
                                         .then(() => { this.setState({ isLoading: false }); });
    }

    updateComponent() {
        this.setState({ seconds: this.state.seconds + 1 });
        this.getReleaseBlock(1);
    }

    render() {
        const releaseBlock = this.props.releaseBlock;
        return (
                <div>
                  <div className="pad-20">

                      <ReleaseDateHeader momentHeaderDate={ moment('2017-07-08', 'YYYY-MM-DD') } startTime="08:00 PM" stopTime="01:30 AM" seconds={ this.state.seconds } />

                      <ReleaseBlockTable />

                      <div className={this.state.elementCss}>
                            { releaseBlock.BlockStatus }
                      </div>

                  </div>
                </div>
               );
    }
}

const mapStateToProps = (state, ownProps) => {
  
    return { 
               releaseBlock: state.release.releaseBlock
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