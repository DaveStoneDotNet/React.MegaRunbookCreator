import React                  from 'react';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as appActions        from '../../state/actions/appActions';

class ResponsiveApp extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions() {
        const dimensions = { width: window.innerWidth, height: window.innerHeight };
        this.props.actions.updateDimensions(dimensions);
    }

    render() {
        return (
            <div/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
                actions: bindActionCreators(appActions, dispatch)
           };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveApp);
