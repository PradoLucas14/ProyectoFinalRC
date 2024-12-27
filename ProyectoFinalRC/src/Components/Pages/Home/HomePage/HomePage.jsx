import React from 'react';
import Banner from '../Banner/Banner'; // Importa el componente Banner
import About from '../About/About';
import Services from '../ServicesAndinos/Services';
import Productos from '../Products/Productos'; // Importa Link de react-router-dom
import './HomePage.css';
import Upload from '../../../Layout/Upload/Upload';
import Admin from '../../Admin/Admin';


function HomePage({user}) {
  return (
    <div className='HomePage' id='top'>
      <div className="Banner">
        <Upload/>
        <Banner isLoggedIn={user.isLoggedIn}/>
      </div>
      <div className="About">
        <About />
      </div>
      <div className="Services">
        <Services />
      </div>
      <div className='Products'>
        <Productos />
      </div>
      <Admin/>
    </div>
  );
}

export default HomePage;
