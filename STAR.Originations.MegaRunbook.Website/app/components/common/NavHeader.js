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
                            <LinkContainer to="/" onlyActiveOnIndex><NavItem>Home</NavItem></LinkContainer>
                            <LinkContainer to="/releases"><NavItem>Release</NavItem></LinkContainer>
                            <LinkContainer to="/rfcs"><NavItem>RFCs</NavItem></LinkContainer>
                            <LinkContainer to="/runbooks"><NavItem>Runbooks</NavItem></LinkContainer>
                            <LinkContainer to="/templates"><NavItem>Templates</NavItem></LinkContainer>
                            <LinkContainer to="/builds"><NavItem>Builds</NavItem></LinkContainer>
                            <LinkContainer to="/applications"><NavItem eventKey={7}>Applications</NavItem></LinkContainer>
                            <LinkContainer to="/admin"><NavItem>Admin</NavItem></LinkContainer>
                            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
                            <NavDropdown title="Demo" id="basic-nav-dropdown">
                                <LinkContainer to="/demo"><MenuItem>Demo</MenuItem></LinkContainer>
                                <LinkContainer to=""><MenuItem>Design</MenuItem></LinkContainer>
                                <LinkContainer to=""><MenuItem divider /></LinkContainer>
                                <LinkContainer to=""><MenuItem>React</MenuItem></LinkContainer>
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