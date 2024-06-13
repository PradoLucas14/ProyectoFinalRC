import React from 'react'
import "./Banner.css"
import { motion } from 'framer-motion';


function Banner() {
  return (
    <div className='Banner'>
        <div className='OverlayBanner'>
            <div className="colum columOne">
                <div className="containerBannerOne">
                    <div className="tituloContainer">
                        <h1>ANDINOS</h1>
                    </div>
                    <div className='textContainer'>
                        <p>
                            "La Esencia de los Andes en Tu Mesa: 
                            Reserva Fácilmente con Andinos y Déjate 
                            Sorprender por Nuestros Sabores"
                        </p>
                    </div>
                    <div className='btnContainer'>
                        <button>
                            <p>Reserva tu mesa</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="colum columTwo">
            </div>
        </div>
    </div>
  )
}

export default Banner
