import React                    from 'react';
import toastr                   from 'toastr';

import { getReleaseBlockBgCss}  from '../../constants';

import ToggleHeader             from '../common/ToggleHeader';

import ReleaseActivityList      from './ReleaseActivityList';

class ReleaseActivity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isUp:         props.isUp         ? props.isUp         : true, 
            staticStyles: props.staticStyles ? props.staticStyles : 'White' 
        };

        this.handleClick = this.handleClick.bind(this);

        toastr.options.positionClass = 'toast-bottom-right';
    }

    handleClick () {
        this.setState((prevState) => ({ isUp: !prevState.isUp }));
        toastr.warning('not implemented yet');
    }

    render() {
        const releaseStatus = this.props.releaseStatus;
        const activities    = this.props.activities;
        const bgCss         = getReleaseBlockBgCss(releaseStatus);

        return (
                    <div>
                        <div className={ bgCss }>
                            <ToggleHeader header="Activity" />
                        </div>
                        <div id="filter-activity" className="border margin-top-2">
                            <div className="float-right pad-top-10 pad-right-10">
                                <i className="fa fa-search white-a-3 font-1-40" />
                            </div>
                            <div className="pad-5 width-100 white-a-9">
                                <input type="text" className="white-a-1-bg pad-5 Lato" style={{ width: '90%', border: 'none' }} />
                            </div>
                        </div>
                        <ReleaseActivityList activities={ activities }/>
                    </div>
               );
    }
}

export default ReleaseActivity;
