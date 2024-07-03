import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAllowed, isAdmin, children }) => {
  if (!isAllowed) {
    return <Navigate to='/' />;
  } else {
    if (isAdmin) {
      // Si es administrador, permitir acceso a la ruta
      return children;
    } else {
      // Si no es administrador, redirigir o denegar acceso según la lógica de tu aplicación
      return (
        <Navigate
          to='/reserve' // Redirige a la ruta de reserva u otra ruta adecuada
        />
      );
    }
  }
};

export default PrivateRoute;