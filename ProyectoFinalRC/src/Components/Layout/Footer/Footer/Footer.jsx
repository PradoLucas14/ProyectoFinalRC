import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Importa tu archivo de estilos CSS para el footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Dirección: Calle Ejemplo, Ciudad Ejemplo</p>
            <p>Teléfono: +123 456 789</p>
            <p>Email: info@example.com</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces útiles</h5>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Galería</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Reservas</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>&copy; 2024 Nombre de tu empresa. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
