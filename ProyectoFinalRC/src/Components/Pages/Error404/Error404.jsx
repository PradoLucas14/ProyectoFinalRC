import React, { useState, useEffect } from 'react';
import error1 from "../../../assets/Img/Error404/1_error.jpg"
import error2 from "../../../assets/Img/Error404/3_error.jpg"
              // <img src={logo} alt="" className="logo-footer"/>
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
        <img src={error1} className='img-error404' alt="Error 404-Mobile" />
      ) : (
        <img src={error2} className='img-error404' alt="Error 404-Desktop" />
      )}
      <button className='boton-backError' onClick={"rutaparahome"}>Back</button>
    </div>
  );
};

export default Error404;
