import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={Link} to="/">New application</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/view">View applications</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/edit">Edit application</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
export default Navbar