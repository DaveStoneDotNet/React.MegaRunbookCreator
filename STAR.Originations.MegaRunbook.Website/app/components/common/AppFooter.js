import React       from 'react';
import PropTypes   from 'prop-types';

class AppFooter extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;
        const appDimensions = this.props.app.appDimensions;

        return (
            <div>
                <div id="footer" className={app.ajaxCount <= 0 ? 'footer non-working-footer' : 'footer working-footer'}>
                    <span className="float-right"><i className="fa fa-clone gray-9 font-1-10" /></span>
                    <span className="float-right pad-right-10 pad-top-2 white-a-1 font-0-75">{appDimensions.width} x {appDimensions.height}</span>
                    <div className={app.ajaxCount <= 0 ? 'hide' : ''}>
                        <i className="fa fa-cog fa-spin gray-9 font-1-10" /> <span className="app-working-message">{app.ajaxMessage} </span><span className="font-0-75 opacity-10">{app.ajaxCount}</span>
                    </div>
                </div>
            </div>
           );
    }
}

AppFooter.propTypes = {
                          app: PropTypes.object.isRequired
                      };

export default AppFooter;
