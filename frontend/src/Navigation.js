import './Navigation.css';
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar inverse style={{ borderRadius:0 }}>
        <Navbar.Header>
          <Navbar.Brand style={{ color: '#9d9d9d', marginLeft: '50px'} }>
            Chess Hacker
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={{ pathname: '/about' }}>
              <NavItem>About</NavItem>
            </LinkContainer>
            <LinkContainer to={{ pathname: '/projects' }}>
              <NavItem>Projects</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
