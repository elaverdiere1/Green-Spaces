import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

// const authenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#change-password">Change Password</Nav.Link>
//     <Nav.Link href="#sign-out">Sign Out</Nav.Link>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//     <Nav.Link href="#sign-in">Sign In</Nav.Link>
//   </Fragment>
// )

const alwaysOptions = (
  <Fragment>
    <Nav className="justify-content-center">
      <NavDropdown title="Menu" class="collapsible-nav-dropdown">
        <NavDropdown.Item href="#home">Home</NavDropdown.Item>
        <NavDropdown.Item href="#LandingPage">About</NavDropdown.Item>
        <NavDropdown.Item href="#map">Park List</NavDropdown.Item>
        <NavDropdown.Item href="#getinvolved">Get Involved</NavDropdown.Item>
        <NavDropdown.Item href="#eonate">Donate</NavDropdown.Item>
        <NavDropdown.Item href="#events">Events</NavDropdown.Item>
        <NavDropdown.Item href="#contactus">Contact Us</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// <Navbar.Brand href="#">
//   Green Spaces
// </Navbar.Brand>
// { user ? authenticatedOptions : unauthenticatedOptions }

export default Header
