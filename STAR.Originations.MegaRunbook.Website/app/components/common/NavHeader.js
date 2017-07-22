import React             from 'react';
import PropTypes         from 'prop-types';
import { Navbar }        from 'react-bootstrap';
import { Nav }           from 'react-bootstrap';
import { NavItem }       from 'react-bootstrap';
import { NavDropdown }   from 'react-bootstrap';
import { MenuItem }      from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link }          from 'react-router';
import { IndexLink }     from 'react-router';

class NavHeader extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const app = this.props.app;

        return (
            <div className="navbar-root">
                
                <Navbar inverse fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">MRC</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Nav>
                            <LinkContainer to="/home"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                            <LinkContainer to="/releases"><NavItem eventKey={2}>Release</NavItem></LinkContainer>
                            <LinkContainer to="/rfcs"><NavItem eventKey={3}>RFCs</NavItem></LinkContainer>
                            <LinkContainer to="/runbooks"><NavItem eventKey={4}>Runbooks</NavItem></LinkContainer>
                            <LinkContainer to="/templates"><NavItem eventKey={5}>Templates</NavItem></LinkContainer>
                            <LinkContainer to="/builds"><NavItem eventKey={6}>Builds</NavItem></LinkContainer>
                            <LinkContainer to="/applications"><NavItem eventKey={7}>Applications</NavItem></LinkContainer>
                            <LinkContainer to="/admin"><NavItem eventKey={8}>Admin</NavItem></LinkContainer>
                            <LinkContainer to="/about"><NavItem eventKey={9}>About</NavItem></LinkContainer>
                            <NavDropdown eventKey={10} title="Demo" id="basic-nav-dropdown">
                                <LinkContainer to="/demo"><MenuItem eventKey={10.1}>Demo</MenuItem></LinkContainer>
                                <LinkContainer to=""><MenuItem eventKey={10.2}>Design</MenuItem></LinkContainer>
                                <LinkContainer to=""><MenuItem divider /></LinkContainer>
                                <LinkContainer to=""><MenuItem eventKey={10.4}>React</MenuItem></LinkContainer>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Header>
                </Navbar>
               </div>
           );
    }
}

NavHeader.propTypes = {
                          app: PropTypes.object.isRequired
                      };

export default NavHeader;