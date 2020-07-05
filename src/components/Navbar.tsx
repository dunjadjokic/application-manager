import React from 'react';
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  return (
   <Nav justify variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">New application</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/edit">Edit application</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
export default Navbar