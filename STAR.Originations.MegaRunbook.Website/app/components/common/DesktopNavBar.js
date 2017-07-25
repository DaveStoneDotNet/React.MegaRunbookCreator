import React                  from 'react';
import PropTypes              from 'prop-types';
import { Navbar }             from 'react-bootstrap';
import { Nav }                from 'react-bootstrap';
import { NavItem }            from 'react-bootstrap';
import { NavDropdown }        from 'react-bootstrap';
import { MenuItem }           from 'react-bootstrap';
import { LinkContainer }      from 'react-router-bootstrap';
import { Link }               from 'react-router';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

class DesktopNavBar extends React.Component {

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

        return (
            <div className="navbar-root">

                <Navbar inverse fixedTop collapseOnSelect>
                    <div className="container-fluid">
                        <div className="float-right hidden-sm hidden-xs hidden-md-block visible-lg-block">
                            <div className="head-runner">
                                <img src="../../app//images/running-01.gif" className={app.ajaxCount > 0 ? "show-working-head-runner" : "hide-working-head-runner"} alt="working" />
                            </div>
                            <div className="float-right pad-top-15">
                                <span className=""><i className="fa fa-user-circle gray-5 font-1-10" /> <span style={{ marginTop: "-1px" }} className="Lato font-1-00 opacity-60 pad-left-5 lowercase">{app.user.UserDisplayName}</span></span>
                            </div>
                        </div>
                        <Navbar.Header>
                            <Navbar.Toggle className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainNavbar" />
                            <Navbar.Brand>
                                <Link to="/">MRC</Link>
                            </Navbar.Brand>
                            <Nav id="mainNavbar" className="navbar-collapse collapse">
                                <LinkContainer to="/" onlyActiveOnIndex><NavItem>Home</NavItem></LinkContainer>
                                <NavDropdown title="Release" id="basic-nav-dropdown">
                                    <LinkContainer to="/releases"><MenuItem>Manage</MenuItem></LinkContainer>
                                    <LinkContainer to="/compact"><MenuItem>Status</MenuItem></LinkContainer>
                                </NavDropdown>
                                <LinkContainer to="/rfcs"><NavItem>RFCs</NavItem></LinkContainer>
                                <LinkContainer to="/runbooks"><NavItem>Runbooks</NavItem></LinkContainer>
                                <LinkContainer to="/templates"><NavItem>Templates</NavItem></LinkContainer>
                                <LinkContainer to="/builds"><NavItem>Builds</NavItem></LinkContainer>
                                <LinkContainer to="/applications"><NavItem eventKey={7}>Applications</NavItem></LinkContainer>
                                <LinkContainer to="/admin"><NavItem>Admin</NavItem></LinkContainer>
                                <LinkContainer to="/about" className="hidden-sm hidden-xs visible-md-block visible-lg-block"><NavItem>About</NavItem></LinkContainer>
                                <NavDropdown title="Demo" id="basic-nav-dropdown">
                                    <LinkContainer to="/demo"><MenuItem>Demo</MenuItem></LinkContainer>
                                    <LinkContainer to="/responsive"><MenuItem>Responsive Demos</MenuItem></LinkContainer>
                                    <LinkContainer to="/tba_01"><MenuItem>Design</MenuItem></LinkContainer>
                                    <LinkContainer to=""><MenuItem divider /></LinkContainer>
                                    <LinkContainer to="/tba_02"><MenuItem>React</MenuItem></LinkContainer>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Header>
                    </div>
                </Navbar>
            </div>
        );
    }
}

DesktopNavBar.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavBar);