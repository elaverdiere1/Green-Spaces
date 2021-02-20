import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const LandingPage = () => (
  <Fragment>
    <h1>About Page</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <br />
    <Container >
      <Row className="add-space">
        <Col md={4}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
        <Col md={{ span: 4, offset: 4 }}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
      </Row>
      <Row className="add-space">
        <Col md={4}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
        <Col md={{ span: 4, offset: 4 }}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
      </Row>
      <Row className="add-space">
        <Col md={4}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
        <Col md={{ span: 4, offset: 4 }}><img src="https://img.icons8.com/metro/26/000000/rounded-rectangle.png"/></Col>
      </Row>
    </Container>
  </Fragment>
)

export default LandingPage
