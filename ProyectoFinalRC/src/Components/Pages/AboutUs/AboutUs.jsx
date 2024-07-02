import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="banner">
    <div className="overlay">
      <Container fluid className="h-100">
          <Row className="h-100 align-items-center">
          <Col md={6} className="text-center text-md-start d-flex flex-column justify-content-center">
              <div className="container1 p-1 ">
              <h1 className="display-2">ACERCA DE NOSOTROS</h1>
              
              
              </div>
          </Col>
          <Col md={6} className="d-none d-md-block"></Col>
          </Row>
      </Container>
    </div>
  </div>
  )
}

export default AboutUs
