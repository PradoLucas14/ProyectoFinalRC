import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../ServicesAndinos/Services';
import Productos from '../Products/Productos';
import Upload from '../../../Layout/Upload/Upload';
import './HomePage.css';
import Error404 from '../../Error404/Error404';

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
    </div>
  );
}

export default HomePage;
