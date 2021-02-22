import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../../index.scss'

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
    <NavDropdown className="drop" title=" " class="collapsible-nav-dropdown">
      <NavDropdown.Item href="#">Screen 1</NavDropdown.Item>
      <NavDropdown.Item href="#screen2">Screen 2</NavDropdown.Item>
      <NavDropdown.Item href="#screen3">Screen 3</NavDropdown.Item>
      <NavDropdown.Item href="#screen4">Screen 4</NavDropdown.Item>
      <NavDropdown.Item href="#screen5">Screen 5</NavDropdown.Item>
    </NavDropdown>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar className="nav" variant="dark" expand="md">

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
