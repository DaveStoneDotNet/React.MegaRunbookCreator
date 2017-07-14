import React from 'react';

import toastr from 'toastr';

class ToggleHeader extends React.Component {
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
                    <div>
                        <div className="float-right pad-top-10 pad-right-20 white-a-3 font-2-00" onClick={ this.handleClick }>
                            <i className={ this.state.isUp ? 'fa fa-angle-up' : 'fa fa-angle-down' } />
                        </div>
                        <div className="align-center pad-top-10 pad-right-10 pad-bottom-10 pad-left-40 BebasNeue font-2-00 width-100 white-a-9">
                            { this.props.header }
                        </div>
                    </div>
               );
    }
}

export default ToggleHeader;
