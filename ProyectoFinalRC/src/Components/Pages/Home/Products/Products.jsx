import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MenuItem from './MenuItem/MenuItem';
import "./Products.css"

const ComponentName = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/menu') // Ajusta la URL según donde esté corriendo tu json-server
            .then(response => response.json())
            .then(data => setMenuItems(data))
            .catch(error => console.error('Error fetching menu items:', error));
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='Menu'>
            <div className="menuContainer">
                <div className="titleContainerMenu">
                    <h2>Top de Platillos</h2>
                </div>
                <div className="carouselContainer">
                    <Carousel className='carousel' responsive={responsive}>
                        {menuItems.map(item => (
                            <MenuItem key={item.id} item={item} />
                        ))}
                    </Carousel>
                </div>
                <div className="btnMenuContainer">
                    <button className='btnMenu'>
                        <p>Ver más</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ComponentName;
