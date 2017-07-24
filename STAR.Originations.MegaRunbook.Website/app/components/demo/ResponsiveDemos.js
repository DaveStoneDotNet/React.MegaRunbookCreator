import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import Responsive             from 'react-responsive';

import HomeButton             from '../home/HomeButton';
import ResponsiveImage        from '../common/ResponsiveImage';

class ResponsiveDemos extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                         width:  800,
                         height: 182
                     };

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {

        const Desktop = ({ children }) => <Responsive children={children} minWidth={992} />;
        const Tablet  = ({ children }) => <Responsive children={children} minWidth={768} maxWidth={992} />;
        const Mobile  = ({ children }) => <Responsive children={children} maxWidth={768} />;

        const w = this.state.width;
        const h = this.state.height;

        const s = { width: w / 2, height: h / 2 };
        const o = { width: w < 600 ? w / 2 : 500 };

        return (
            <div>
                <h1>Responsive Demos</h1>

                <ResponsiveImage src="../app/images/Mega-Runbook-Creator-Button-04.png" staticStyles="" />

                <div style={s} className="border">
                    <img style={ o } src="../app/images/Mega-Runbook-Creator-Button-04.png" className="pointer;" title="Runbooks" />
                </div>

                <Desktop>
                    You are a desktop or laptop
                    <HomeButton />
                </Desktop>

                <Tablet>You are a tablet</Tablet>
                <Mobile>You are a mobile phone</Mobile>

            </div>
        );
    }
}

ResponsiveDemos.propTypes = {

                            };

const mapStateToProps = (state) => ({

                                    });

const mapDispatchToProps = (dispatch) => {
    return {

           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveDemos);