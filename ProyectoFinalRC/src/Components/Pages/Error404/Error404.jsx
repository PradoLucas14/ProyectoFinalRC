import React, { useState, useEffect } from 'react';
import img1 from "./../../../assets/Img/Error404/1_error.jpg"
import img2 from "./../../../assets/Img/Error404/2_error.jpg"
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
        <img src={img1} alt="Error 404-Mobile" />
      ) : (
        <img src={img2} alt="Error 404-Desktop" />
      )}
      <p>¡Página no encontrada!</p>
    </div>
  );
};

export default Error404;
