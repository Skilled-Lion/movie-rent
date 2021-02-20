import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar  fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'} style={{color:"#e756d4", fontSize:"2em", fontWeight:"bold"}}>Sonali Kumari</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/'} exact>
          <NavItem>
            <Glyphicon glyph='home' /> Personal
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/education'}>
          <NavItem>
            <Glyphicon glyph='education' /> Education and Exprience
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/blogs'}>
          <NavItem>
            <Glyphicon glyph='th-list' /> Blogs
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
