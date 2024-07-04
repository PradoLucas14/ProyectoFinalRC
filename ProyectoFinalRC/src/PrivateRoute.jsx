import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAllowed, isAdmin, children }) => {
  if (!isAllowed) {
    return <Navigate to='/' />;
  } else {
    if (isAdmin) {
      // Si es administrador, permitir acceso a la ruta
      return children;
    } 
  }
};

export default PrivateRoute;