import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AboutUsBanner.css"


const AboutUsBanner = () => {
  return (
    <div className="banner-aboutus">
    <div className="overlay-aboutus">
      <Container fluid className="h-100 ">
          <Row className="h-100 align-items-center">
          <Col md={12} className="text-center d-flex flex-column justify-content-center">
              <div className="container1 p-1 ">
              <h1 className="display-4">ACERCA DE NOSOTROS</h1>
              
              
              </div>
          </Col>
          <Col md={0} className="d-none d-md-block"></Col>
          </Row>
          
      </Container>
      
    </div>
    
     
    
  </div>
  
  
  )
}

export default AboutUsBanner;
