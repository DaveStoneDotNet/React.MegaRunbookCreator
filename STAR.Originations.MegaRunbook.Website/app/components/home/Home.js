import React         from 'react';

import HomeButton    from '../home/HomeButton';

class Home extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const appDimensions = this.props.app.appDimensions;

        return (
                    <div className="align-center">
                        <HomeButton appDimensions={appDimensions} />
                        <div className="pad-40 white-a-1 font-1-50">
                            <div>
                                <a href="/design/release-status.html" target="_blank" title="status"><i className="fa fa-circle-thin pad-right-10" /></a> 
                                <a href="/design/rfcs.html" target="_blank" title="rfcs"><i className="fa fa-circle-thin pad-right-10" /></a>
                                <a href="/design/runbooks.html" target="_blank" title="runbooks"><i className="fa fa-circle-thin pad-right-5 pad-right-10" /></a>
                                <a href="/design/app-services.html" target="_blank" title="apps"><i className="fa fa-circle-thin pad-right-5 pad-right-10" /></a>
                            </div>
                        </div>
                    </div>
               );
    }
}

export default Home;
