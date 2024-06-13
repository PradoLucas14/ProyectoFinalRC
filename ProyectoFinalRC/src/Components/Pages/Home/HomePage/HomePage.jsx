import React from 'react'
import Banner from '../Banner/Banner'
import "./HomePage.css"
import About from '../About/About'
import Services from '../ServicesAndinos/Services'

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
    </div>
  )
}

export default HomePage
