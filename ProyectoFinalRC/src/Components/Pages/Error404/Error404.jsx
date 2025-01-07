import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="error404">
      <div className="overlayError404">
        <div className="errorText">
          <p>ERROR</p>
          <h3>404</h3>
          <p>Página no encontrada</p>
          <button onClick={handleGoHome} className="goHomeButton">
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error404;
