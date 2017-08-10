import React         from 'react';
import Responsive    from 'react-responsive';
import { IndexLink } from 'react-router';

import HomeButton    from '../home/HomeButton';

import ResponsiveImage from '../common/ResponsiveImage';

class Home extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const appDimensions = this.props.app.appDimensions;

        const Desktop = ({ children }) => <Responsive children={children} minWidth={992} />;
        const Tablet  = ({ children }) => <Responsive children={children} minWidth={768} maxWidth={992} />;
        const Mobile  = ({ children }) => <Responsive children={children} maxWidth={768} />;

        return (
            <div className="align-center">

                <Desktop>
                    <HomeButton appDimensions={appDimensions} />
                    <div className="pad-40 white-a-1 font-1-50">
                        <div>
                            <a href="/design/release-status.html" target="_blank" title="status"><i className="fa fa-circle-thin pad-right-10" /></a>
                            <a href="/design/rfcs.html" target="_blank" title="rfcs"><i className="fa fa-circle-thin pad-right-10" /></a>
                            <a href="/design/runbooks.html" target="_blank" title="runbooks"><i className="fa fa-circle-thin pad-right-5 pad-right-10" /></a>
                            <a href="/design/app-services.html" target="_blank" title="apps"><i className="fa fa-circle-thin pad-right-5 pad-right-10" /></a>
                        </div>
                    </div>
                </Desktop>

                <Tablet>
                    <HomeButton appDimensions={appDimensions} />
                </Tablet>

                <Mobile>
                    <div className="pad-top-40">
                        <IndexLink to="/compact" className="no-underline">
                            <ResponsiveImage appDimensions={appDimensions} src="../app/images/Mega-Runbook-Creator-Button-04.png" staticStyles="pointer" />
                        </IndexLink>
                    </div>
                </Mobile>

            </div>
       );
    }
}

export default Home;
