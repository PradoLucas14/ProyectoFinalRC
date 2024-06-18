import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';
import img1 from "../../../../assets/Img/ImgHome/empanada.png";
import img2 from "../../../../assets/Img/ImgHome/coctel-con-rodaja-de-limon.png";
import img3 from "../../../../assets/Img/ImgHome/pastel.png";

function Services() {
  return (
    <div className='ServicesContainer'>
      <Container>
        <div className='tittleContainerServices'>
          <h2>Nuestros servicios</h2>
        </div>
        <Row className='imgContainers'>
          <Col md={4} className='mb-4'>
            <div className='imgContainer'>
              <img src={img1} alt='Empanada' className='img-fluid' />
              <p className='description'>Comida tradicional</p>
            </div>
          </Col>
          <Col md={4} className='mb-4'>
            <div className='imgContainer'>
              <img src={img2} alt='Coctel' className='img-fluid' />
              <p className='description'>Cocteles</p>
            </div>
          </Col>
          <Col md={4} className='mb-4'>
            <div className='imgContainer'>
              <img src={img3} alt='Pastel' className='img-fluid' />
              <p className='description'>Repostería</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
