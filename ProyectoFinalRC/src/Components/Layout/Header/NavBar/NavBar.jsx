import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const AppNavbar = ({user,setUser}) => {
  const handleLogout=()=>{
    localStorage.clear();
    setUser({
      name:"",
    email:"",
    isLoggedIn:false,
    role:"",
    id:""
    })
  };
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

 
  return (
    <Navbar expand="lg" variant="dark" className={`fixed-top navbar-custom ${navbarClass}`}>
      <Container fluid>
        <Navbar.Brand href="#" className='navTittle'>Andinos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" onClick={() => setCollapse(!Collapse) && setNavbarClass('navbar-scroll')}>
            {Collapse ? (<i className="bi bi-list"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg></i>) : (<i className="bi bi-x-lg"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg></i>)}
        </Navbar.Toggle>        
        <Navbar.Collapse id="navbarNav">
            <div className='mx-auto'></div>
            <Nav className="list">
                <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Galery" className="nav-link">Galería</Nav.Link>
                <Nav.Link as={Link} to="/Contact"  className="nav-link">Contacto</Nav.Link>
                
                {user.isLoggedIn && (
                <React.Fragment>
                    
                    {user.role === 'Administrador' && (
                    <Nav.Link as={Link} to="/Admin"  className="nav-link">Administración</Nav.Link>
                    )}

                    <Nav.Link as={Link} to='/Home' href="#" className="nav-link" onClick={handleLogout}>Cerrar Sesión</Nav.Link>
                </React.Fragment>
                )}

                {!user.isLoggedIn && (
            <Nav.Link as={Link} to="/Login" className="nav-link">Acceso</Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
