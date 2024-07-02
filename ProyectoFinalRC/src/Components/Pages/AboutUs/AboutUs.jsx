import React from 'react'
import AboutUsBanner from './AboutUsBanner/AboutUsBanner'
import Card from "./Card"
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
    <div className='Card'>
      <Card/>
    </div>
    <div className='Card'>
      <Card/>
    </div>
    </div>
  )
}

export default AboutUs
