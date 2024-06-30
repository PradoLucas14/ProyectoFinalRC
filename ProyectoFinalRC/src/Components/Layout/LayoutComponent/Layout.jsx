// src/Components/Layout/LayoutComponent/Layout.js
import React from 'react';
import AppNavbar from '../Header/NavBar/NavBar';
import Footer from '../../Footer/Footer'; // Importa el componente Footer
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        {children} {/* Aquí se renderizará el contenido de cada página */}
      </Container>
      <Footer /> {/* Agrega el componente Footer */}
    </>
  );
};

export default Layout;
