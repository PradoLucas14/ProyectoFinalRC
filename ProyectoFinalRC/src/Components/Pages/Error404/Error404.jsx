import React, { useState, useEffect } from 'react';
import error1 from "../../../assets/Img/Error404/1_error.jpg"
import error2 from "../../../assets/Img/Error404/5_error.jpg"
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
      <div className='overlayError404'>
        <div className="errorText">
          <p>ERROR</p>
          <h3>404</h3>
          <p>pagina no encontrada</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
