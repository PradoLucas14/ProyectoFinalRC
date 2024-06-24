import React, { useState, useEffect } from 'react';

import './Error404.css'

const Error404 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="error404">
      {isMobile ? (
        <img src={img1} className='img-error404' alt="Error 404-Mobile" />
      ) : (
        <img src={img2} className='img-error404' alt="Error 404-Desktop" />
      )}
      <p>¡Página no encontrada!</p>
    </div>
  );
};

export default Error404;
