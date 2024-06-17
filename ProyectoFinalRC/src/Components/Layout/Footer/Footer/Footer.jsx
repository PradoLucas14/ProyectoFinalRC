import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Importa tu archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className='columContainer'>
          <Col md={4} className="text-center text-md-start">
            <h2>Andinos</h2>
            <p>Dirección: Rivadavia 1090, Alderetes</p>
            <p>Teléfono: 381 444 9999</p>
            <p>Email: andinos24@gmial.com</p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Enlaces Útiles</h5>
            <ul className="list-unstyled" >
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Galería</a></li>
              <li><a href="#">Conocenos</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 Grupo 1 comisión 94i.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
