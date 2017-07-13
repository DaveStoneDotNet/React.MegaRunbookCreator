import React from 'react';

import { getIconCss } from '../../constants';

class Icon extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                        type:         props.type         ? props.type         : 'NotStarted', 
                        staticStyles: props.staticStyles ? props.staticStyles : 'BebasNeue White' 
                     };
    }

    render() {
        const staticStyles = this.state.staticStyles;
        return (
                    <div className={ staticStyles }>
                        <i className={ getIconCss(this.state.type) } />
                    </div>
               );
    }
}

export default Icon;
