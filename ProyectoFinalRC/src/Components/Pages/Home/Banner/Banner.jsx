import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner({isLoggedIn}) {
  return (
    <div className="banner">
      <div className="overlay">
        <Container fluid className="h-100">
            <Row className="h-100 align-items-center">
            <Col md={6} className="text-center text-md-start d-flex flex-column justify-content-center">
                <div className="container1 p-0">
                <h1 className="display-4">ANDINOS</h1>
                <p className="lead">
                    "La Esencia de los nuestro pais en Tu Mesa: Reserva Fácilmente con Andinos y Déjate Sorprender por Nuestros Sabores"
                </p>
                <Link to="/login" className="btn btn-warning custom-btn mt-3">Reservar mesa</Link>
                <Link to={isLoggedIn?'/reserve':'/Login'} className="btn btn-warning custom-btn mt-3">Reservar mesa</Link>
                </div>
            </Col>
            <Col md={6} className="d-none d-md-block"></Col>
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default Banner;



