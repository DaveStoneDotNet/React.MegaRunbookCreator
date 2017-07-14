import React from 'react';

import toastr from 'toastr';

class Radio extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                         isSelected:   props.isSelected   ? props.isSelected   : false, 
                         staticStyles: props.staticStyles ? props.staticStyles : 'White' 
                     };

        this.handleClick = this.handleClick.bind(this);

        toastr.options.positionClass = 'toast-bottom-right';
    }

    handleClick () {
        this.setState((prevState) => ({ isSelected: !prevState.isSelected }));
        toastr.warning('not implemented yet');
    }

    render() {
        const staticStyles = this.state.staticStyles;
        return (
                    <div className={ staticStyles } onClick={ this.handleClick }>
                        <i className={ this.state.isSelected ? 'fa fa-dot-circle-o' : 'fa fa-circle-o' } />
                    </div>
               );
    }
}

export default Radio;
