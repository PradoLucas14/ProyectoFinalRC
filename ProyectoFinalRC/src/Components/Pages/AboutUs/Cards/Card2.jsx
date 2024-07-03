import React from 'react';
import './Card.css'; 
import ProfilePic from '../../../../assets/Img/AboutUs/Matias Perez.jpg'

const Card2 = () => {
  return (
    <div className="about-us-card">
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="text-content">
        <h2>Matias Perez</h2>
        <h3>Integrante</h3>
        <p>
          <a target='_blank' href="https://github.com/MatiasPerez00"><b>GitHub</b></a>
        </p>
        
      </div>
    </div>
  );
}

export default Card2;