import React from 'react';
import './Card.css'; // Estilos CSS para la tarjeta
// Importa la imagen de perfil

const Card = () => {
  return (
    <div className="about-us-card">
      <div className="profile-pic">
        <img src="" alt="Profile" />
      </div>
      <div className="text-content">
        <h2>Nosotros</h2>
        <p>
          Somos un equipo apasionado comprometido con la excelencia y la innovación.
          Nuestra misión es [...]
        </p>
        <p>
          En nuestra página, encontrarás [...]
        </p>
        <p>
          ¡Únete a nosotros en nuestro viaje para [...]
        </p>
      </div>
    </div>
  );
}

export default Card;