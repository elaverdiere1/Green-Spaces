import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

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
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="../InfoPage/InfoPage.js">Info</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="primary" variant="dark" expand="md">
    <Navbar.Brand href="#">
      Green Spaces
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

// { user ? authenticatedOptions : unauthenticatedOptions }

export default Header
