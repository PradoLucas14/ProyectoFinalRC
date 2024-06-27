import React from 'react';
import Banner from '../Banner/Banner'; // Importa el componente Banner
import About from '../About/About';
import Services from '../ServicesAndinos/Services';
import Productos from '../Products/Productos';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import './HomePage.css';
import Upload from '../../../Layout/Upload/Upload';
import React from 'react'
import Banner from '../Banner/Banner'
import "./HomePage.css"
import About from '../About/About'
import Services from '../ServicesAndinos/Services'
import Products from "../Products/Products"
import Contact from '../Contact/Contact'


function HomePage() {
  return (
    <div className='HomePage' id='top'>
      <div className="Banner">
        <Upload/>
        <Banner />
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Services">
        <Services />
      </div>
      <div>
      <Productos />
      </div>
      <div className='Contact'>
      <Contact/>
      </div>
    </div>
  );
}

export default HomePage;
