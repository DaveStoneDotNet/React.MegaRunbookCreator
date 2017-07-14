import React from 'react';

class Radio extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                         isSelected:   props.isSelected   ? props.isSelected   : false, 
                         someProp:     props.isSelected   ? 'MONKEY'           : 'BANANA', 
                         staticStyles: props.staticStyles ? props.staticStyles : 'White' 
                     };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState((prevState) => ({ isSelected: !prevState.isSelected }));
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
