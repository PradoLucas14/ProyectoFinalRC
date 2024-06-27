import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Importa tu archivo de estilos CSS para el footer
import { FaFacebookSquare, FaTwitterSquare, FaInstagram,FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="columContainer ">
          <Col md={4} className="text-center text-md-start columna-footer">
            <h2>Andinos</h2>
            <p>Dirección: Rivadavia 1090, Alderetes</p>
            <p>Teléfono: 381 444 9999</p>
            <p>Email: andinos24@gmial.com</p>
          </Col>
          <Col md={4} className="text-center ">
            <h5 className='titulo-lista-footer'>Enlaces Útiles</h5>
            <ul className="list-unstyled" >
              <li><a href="#" className='link-footer'>Inicio</a></li>
              <li><a href="#" className='link-footer'>Galería</a></li>
              <li><a href="#" className='link-footer'>Conocenos</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5 className='titulo-lista-footer'>Redes Sociales</h5>
            <ul className="list-unstyled d-flex justify-content-center my-3">
              <li><a href="#" className='link-footer'><FaFacebookSquare size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className='link-footer'><FaTwitterSquare size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className='link-footer'><FaInstagram  size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className='link-footer'><FaWhatsapp size={40} className="mx-2 icon-sociales" /></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
          <hr/>
            <p>&copy; 2024 Andinos.Todos los derecho reservados | Grupo 1 comisión 94i.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
