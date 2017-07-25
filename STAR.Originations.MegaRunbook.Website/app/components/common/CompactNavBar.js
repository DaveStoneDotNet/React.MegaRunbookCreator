import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CompactNavBar extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                         isExpanded: false
                     };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    handleClick() {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
    }

    render() {

        const app     = this.props.app;
        const menuCss = this.state.isExpanded ? '' : 'hidden';

        return (
            <div className="navbar-root">

                <Navbar inverse fixedTop collapseOnSelect>
                    <div className="container-fluid">
                        <Navbar.Header>
                            <button type="button" className="navbar-toggle collapsed" onClick={this.handleClick}>
                                <span className="sr-only"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <Navbar.Brand>
                                <Link to="/">MRC</Link>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </div>
                </Navbar>
                <div className={'margin-top-10 font-2-00 ' + menuCss}>
                    <div className="pad-10 border muted-purple-bg hidden">
                        Release Status
                    </div>
                </div>
            </div>
        );
    }
}

CompactNavBar.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompactNavBar);