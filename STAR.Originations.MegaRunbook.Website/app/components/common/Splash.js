﻿import React from 'react';

class Splash extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
                   <div className={ app.isAppInitialized ? 'hide' : ''}>
                    <div className="app-authenticating-box">
                        <div className="white opacity-50">
                            <div>
                                <img src="../../app/images/Mega-Runbook-Creator-Button-01.png" alt="mega-runbook-creator" />
                            </div>
                            <div className="app-authenticating bounceInLeft animated">authenticating</div>
                            <img src="app/images/running.gif" className="opacity-50" alt="working" />
                            <img src="app/images/spiro.svg" className="spriro-02" alt="decorative" />
                        </div>
                    </div>
                   </div>
               );
    }
}

export default Splash;
