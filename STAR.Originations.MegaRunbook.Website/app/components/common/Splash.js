import React           from 'react';

import ResponsiveImage from '../common/ResponsiveImage';

class Splash extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;
        const appDimensions = this.props.app.appDimensions;

        return (
                   <div className={ app.isAppInitialized ? 'hide' : ''}>
                    <div className="app-authenticating-box">
                        <div className="white opacity-50">
                            <div>
                                <ResponsiveImage appDimensions={appDimensions} src="../app/images/Mega-Runbook-Creator-Button-01.png" staticStyles="pointer" />
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
