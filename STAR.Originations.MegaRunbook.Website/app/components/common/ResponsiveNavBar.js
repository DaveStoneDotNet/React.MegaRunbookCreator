import React                  from 'react';
import PropTypes              from 'prop-types';
import { Link }               from 'react-router';
import { IndexLink }          from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import Responsive             from 'react-responsive';

import DesktopNavBar          from './DesktopNavBar';
import CompactNavBar          from './CompactNavBar';

class ResponsiveNavBar extends React.Component {

    constructor(props, context) {

        super(props, context);

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const app = this.props.app;

        const Desktop = ({ children }) => <Responsive children={children} minWidth={992} />;
        const Tablet  = ({ children }) => <Responsive children={children} minWidth={768} maxWidth={992} />;
        const Mobile  = ({ children }) => <Responsive children={children} maxWidth={768} />;

        return (
            <div>

                <Desktop>
                    <DesktopNavBar app={ app } />
                </Desktop>

                <Tablet>
                    <DesktopNavBar app={app} />
                </Tablet>

                <Mobile>
                    <CompactNavBar app={ app } />
                </Mobile>

            </div>
        );
    }
}

ResponsiveNavBar.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveNavBar);