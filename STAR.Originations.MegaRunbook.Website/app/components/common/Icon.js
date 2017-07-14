import React from 'react';

import { getIconCss } from '../../constants';

class Icon extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                        staticStyles: props.staticStyles ? props.staticStyles : 'BebasNeue White' 
                     };
    }

    render() {
        const iconCss = getIconCss(this.props.type);
        const staticStyles = this.state.staticStyles;
        return (
                    <div className={ staticStyles }>
                        <i className={ iconCss } />
                    </div>
               );
    }
}

export default Icon;
