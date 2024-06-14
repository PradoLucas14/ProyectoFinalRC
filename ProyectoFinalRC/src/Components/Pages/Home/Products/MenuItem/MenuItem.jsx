// MenuItem/MenuItem.jsx
import React from 'react';
import './MenuItem.css'; // Importa los estilos CSS para MenuItem

const MenuItem = ({ item }) => {
    return (
        <div className="cardMenu"> {/* Aplica la clase cardMenu */}
            <img src={item.image} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Precio: ${item.price}</p>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default MenuItem;

