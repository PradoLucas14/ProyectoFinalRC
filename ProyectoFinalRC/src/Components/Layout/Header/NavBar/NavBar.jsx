// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Importa tu archivo de estilos CSS donde defines las clases

const AppNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('cliente');
  const [navbarClass, setNavbarClass] = useState('navbar-transparent');
  const [Collapse , setCollapse] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarClass('navbar-scroll');
      } else {
        setNavbarClass('navbar-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
 
  return (
    <Navbar expand="lg" variant="dark" className={`fixed-top navbar-custom ${navbarClass}`}>
      <Container fluid>
        <Navbar.Brand href="#" className='navTittle'>Andinos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" onClick={() => setCollapse(!Collapse)}>
            {Collapse ? (<i class="bi bi-list"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg></i>) : (<i class="bi bi-x-lg"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg></i>)}
        </Navbar.Toggle>        <Navbar.Collapse id="navbarNav">
            <div className='mx-auto'></div>
            <Nav className="list">
                <Nav.Link as={Link} to="/HomePage" className="nav-link">Inicio</Nav.Link>
                <Nav.Link href="#" className="nav-link">Galería</Nav.Link>
                <Nav.Link href="#" className="nav-link">Contacto</Nav.Link>
                
                {isLoggedIn && (
                <React.Fragment>
                    {userRole === 'cliente' && (
                    <Nav.Link href="#" className="nav-link">Reservas</Nav.Link>
                    )}
                    
                    {userRole === 'admin' && (
                    <Nav.Link href="#" className="nav-link">Admin</Nav.Link>
                    )}

                    <Nav.Link href="#" className="nav-link" onClick={handleLogout}>Cerrar Sesión</Nav.Link>
                </React.Fragment>
                )}

                {!isLoggedIn && (
            <Nav.Link as={Link} to="/Login" className="nav-link">Acceso</Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
