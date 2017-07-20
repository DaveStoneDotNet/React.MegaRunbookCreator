import React  from 'react';

import { getReleaseBlockButtonText }  from '../../constants';

import toastr from 'toastr';

class ReleaseBlockStatusButton extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = this.handleClick.bind(this);

        this.setNextReleaseBlockStatus = props.setNextReleaseBlockStatus;

        toastr.options.positionClass = 'toast-bottom-right';
    }

    componentDidMount () {
    }

    componentWillUnmount() {
    }

    handleClick () {
        this.setNextReleaseBlockStatus(this.props.status);
    }

    render() {
        const status = this.props.status;
        const buttonText = getReleaseBlockButtonText(status);

        return (
                    <div onClick={ this.handleClick }>
                        <div className="pointer border-a-30 margin-right-5 pad-left-10 pad-right-10 pad-top-5 pad-bottom-5 white white-a-1-bg font-0-75 Lato align-center" style={{ width: '75px' }}>{ buttonText }</div>
                    </div>
               );
        }
}

export default ReleaseBlockStatusButton;
