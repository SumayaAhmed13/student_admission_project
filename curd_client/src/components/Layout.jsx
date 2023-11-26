import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 const Layout = (props) => {
  return (
    <div>
     <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Student Register</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link3" style={({ isActive }) =>isActive? {color: '#ff0000',fontSize: "20px"}:{ color: '#545e6f',fontSize: "20px"}}> List </Nav.Link>
            <Nav.Link as={NavLink} to="/register" style={({ isActive }) =>isActive? {color: '#ff0000',fontSize: "20px"}:{ color: '#545e6f',fontSize: "20px"}} className="nav-link3">Register</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
    {props.children}
</div>
  )
}
export default Layout
