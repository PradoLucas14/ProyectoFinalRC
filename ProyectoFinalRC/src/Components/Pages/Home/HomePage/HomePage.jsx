import React from 'react'
import Banner from '../Banner/Banner'
import "./HomePage.css"
import About from '../About/About'
import Services from '../ServicesAndinos/Services'
import Products from "../Products/Products"

function HomePage() {
  return (
    <div className='HomePage' id='top'>
      <div className="Banner">
        <Upload/>
        <Banner />
        {/* Botón para redirigir a la página de registro */}
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Services">
        <Services />
      </div>
      <div className='Contact'>
      <Contact/>
      </div>
    </div>
  );
}

export default HomePage;
