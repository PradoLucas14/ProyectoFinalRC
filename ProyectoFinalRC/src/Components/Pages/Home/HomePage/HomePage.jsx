import React from 'react'
import Banner from '../Banner/Banner'
import "./HomePage.css"
import About from '../About/About'
import Services from '../ServicesAndinos/Services'
import Products from "../Products/Products"
import Contact from '../Contact/Contact'

function HomePage() {
  return (
    <div className='HomePage'>
      <div className="Banner">
        <Banner/> 
      </div>
      <div className="About">
        <About/>
      </div>
      <div className="Services">
        <Services/>
      </div>
      <div className='Products'>
        <Products/>
      </div>
      <div clasName='Contact'>
      <Contact/>
      </div>
    </div>
  )
}

export default HomePage
