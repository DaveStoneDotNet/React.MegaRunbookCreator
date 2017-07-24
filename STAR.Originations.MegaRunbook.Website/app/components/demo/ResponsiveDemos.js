import React                  from 'react';
import PropTypes              from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import Responsive             from 'react-responsive';

class ResponsiveDemos extends React.Component {

    constructor(props, context) {

        super(props, context);

    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    updateDimensions() {

    }

    render() {

        const Desktop = ({ children }) => <Responsive children={children} minWidth={992} />;
        const Tablet  = ({ children }) => <Responsive children={children} minWidth={768} maxWidth={992} />;
        const Mobile  = ({ children }) => <Responsive children={children} maxWidth={768} />;

        return (
            <div>
                <h1>Responsive Demos</h1>

                <Desktop>
                    You are a desktop or laptop
                </Desktop>

                <Tablet>
                    You are a tablet
                </Tablet>

                <Mobile>
                    You are a mobile phone
                </Mobile>

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