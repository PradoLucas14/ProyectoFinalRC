import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ComponentName() {
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
                <div className="tittleContainer">
                    <h2>hola soy un listado de productos</h2>
                </div>
                <div className="corouselContainer">
                    <Carousel responsive={responsive}>
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
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


