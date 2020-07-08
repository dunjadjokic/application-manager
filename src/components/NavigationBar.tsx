import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/application-manager/">Application Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav defaultActiveKey="/application-manager/">
          <Nav.Link as={Link} to="/application-manager/">New application</Nav.Link>
          <Nav.Link as={Link} to="/application-manager/view">View applications</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavigationBar