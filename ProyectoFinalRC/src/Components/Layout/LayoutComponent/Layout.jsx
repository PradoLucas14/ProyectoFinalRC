// src/components/Layout.js
import React from 'react';
import AppNavbar from '../Header/NavBar/NavBar';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        {children} {/* Aquí se renderizará el contenido de cada página */}
      </Container>
    </>
  );
};

export default Layout;
