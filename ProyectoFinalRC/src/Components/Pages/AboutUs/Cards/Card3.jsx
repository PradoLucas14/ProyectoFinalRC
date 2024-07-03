import React from 'react';
import './Card.css'; 
import ProfilePic from '../../../../assets/Img/AboutUs/Leonel Pereyra.jpg'

const Card3 = () => {
  return (
    <div className="about-us-card">
      <div className="profile-pic">
        <img src={ProfilePic} alt="Profile" />
      </div>
      <div className="text-content">
        <h2>Leonel Pereyra</h2>
        <h3>Integrante</h3>
        <p>
          <a target='_blank' href="https://github.com/Leonelcp21"><b>GitHub</b></a>
        </p>
        
      </div>
    </div>
  );
}

export default Card3;