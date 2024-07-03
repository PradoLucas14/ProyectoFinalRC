import React from 'react'
import AboutUsBanner from './AboutUsBanner/AboutUsBanner'
import Card from "./Cards/Card"
import Card2 from "./Cards/Card2"
import Card3 from "./Cards/Card3"
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <div className='AboutUs'>
    <div className='AboutUsBanner'>
      <AboutUsBanner/>
    </div>
    <div className='Card'>
      <Card/>
    </div>
    <div className='Card2'>
      <Card2/>
    </div>
    <div className='Card3'>
      <Card3/>
    </div>
    </div>
  )
}

export default AboutUs
