﻿import React           from 'react';

import { IndexLink }   from 'react-router';

import ResponsiveImage from '../common/ResponsiveImage';

class HomeButton extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
                         staticStyles: props.staticStyles ? props.staticStyles : 'BebasNeue White'
                     };
    }

    render() {

        const staticStyles = this.state.staticStyles;
        const appDimensions = this.props.appDimensions;

        return (
            <div className={staticStyles}>
                <div className="">
                    <IndexLink to="/releases" className="no-underline">
                        <ResponsiveImage appDimensions={appDimensions} src="../app/images/Mega-Runbook-Creator-Button-04.png" staticStyles="pointer" />
                        <div className="home-date-block">
                            <img src="../app/images/spiro.svg" className="spriro-m-01" />
                        </div>
                    </IndexLink>
                </div>
            </div>
        );
    }
}

export default HomeButton;
