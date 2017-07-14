import React from 'react';

import toastr from 'toastr';

class ToggleIcon extends React.Component {
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
        const staticStyles = this.state.staticStyles;
        return (
                    <div className={ staticStyles } onClick={ this.handleClick }>
                        <i className={ this.state.isUp ? 'fa fa-angle-up' : 'fa fa-angle-down' } />
                    </div>
               );
    }
}

export default ToggleIcon;
