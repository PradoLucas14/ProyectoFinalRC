import React from 'react';
import './Card.css'; 
import ProfilePic from '../../../../assets/Img/AboutUs/Lucas Prado.jpg'

const Card = () => {
  return (
    <div className="about-us-card">
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="text-content">
        <h2>Lucas Prado</h2>
        <h3> Scrum Master</h3>
        <p>
          <a target='_blank' href="https://github.com/PradoLucas14"><b>GitHub</b></a>
        </p>
        
      </div>
    </div>
  );
}

export default Card;