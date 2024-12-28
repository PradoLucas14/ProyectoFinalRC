import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate(); // Hook para redireccionar

  const handleRedirect = (e) => {
    e.preventDefault(); // Evita la acción predeterminada del enlace
    navigate('/error404'); // Redirige a la página de error 404
  };

  return (
    <footer className="footer">
      <Container fluid>
        <Row className="columContainer">
          <Col md={4} className="text-center text-md-start columna-footer">
            <h2>Andinos</h2>
            <p>Dirección: Rivadavia 1090, Alderetes</p>
            <p>Teléfono: 381 444 9999</p>
            <p>Email: andinos24@gmial.com</p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="titulo-lista-footer">Enlaces Útiles</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="link-footer" onClick={handleRedirect}>Inicio</a></li>
              <li><a href="#" className="link-footer" onClick={handleRedirect}>Galería</a></li>
              <li><a href="#" className="link-footer" onClick={handleRedirect}>Conócenos</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="titulo-lista-footer">Redes Sociales</h5>
            <ul className="list-unstyled d-flex justify-content-center my-3">
              <li><a href="#" className="link-footer" onClick={handleRedirect}><FaFacebookSquare size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className="link-footer" onClick={handleRedirect}><FaTwitterSquare size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className="link-footer" onClick={handleRedirect}><FaInstagram size={40} className="mx-2 icon-sociales" /></a></li>
              <li><a href="#" className="link-footer" onClick={handleRedirect}><FaWhatsapp size={40} className="mx-2 icon-sociales" /></a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <hr />
            <p>&copy; 2024 Andinos. Todos los derechos reservados | Grupo 1 comisión 94i.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

