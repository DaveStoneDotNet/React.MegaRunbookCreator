import React                    from 'react';
import toastr                   from 'toastr';

import { getReleaseBlockBgCss}  from '../../constants';

import ToggleHeader             from '../common/ToggleHeader';

class ReleaseStatusHeader extends React.Component {
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
        const bgCss = getReleaseBlockBgCss(releaseStatus);

        return (
                    <div className={ bgCss }>
                        <ToggleHeader header={ releaseStatus } />
                    </div>
               );
    }
}

export default ReleaseStatusHeader;
