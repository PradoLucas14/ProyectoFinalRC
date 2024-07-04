// src/AboutTeam.js
import React from 'react';
import './Aboutteam.css';

const AboutTeam = () => {
   
    return (
        <div className="about-team">
            <div className="bannerAbout position-relative">
                <div className="overlay d-flex flex-column justify-content-center align-items-center text-white">
                    <h1>Somos Andinos</h1>
                </div>
            </div>
            <div className="content">
                <div className="text-container mb-4">
                    <h2>Nuestro equipo</h2>
                    <p>Nuestro equipo de Andinos está compuesto por un grupo de profesionales apasionados y dedicados que comparten un 
                    objetivo común: llevar innovación y excelencia a cada proyecto en el que trabajamos. Con una combinación única de habilidades y 
                    experiencias, estamos comprometidos a ofrecer soluciones de alta calidad y a superar las expectativas de nuestros clientes.</p>
                </div>
                <div className='container-imgs'>
                    <div className="img1 img">
                        <div className="overlayImg">
                            <h3>Lucas Prado</h3>
                        </div>
                    </div>
                    <div className="img2 img">
                        <div className="overlayImg">
                            <h3>Francisco Di Napoli</h3>
                        </div>
                    </div>
                    <div className="img3 img">
                        <div className="overlayImg">
                            <h3>Alvaro Pissini</h3>
                        </div>
                    </div>
                    <div className="img4 img">
                        <div className="overlayImg">
                            <h3>Ezequiel Lazarte</h3>
                        </div>
                    </div>
                    <div className="img5 img">
                        <div className="overlayImg">
                            <h3>Leonel Pereyra</h3>
                        </div>
                    </div>
                    <div className="img6 img">
                        <div className="overlayImg">
                            <h3>Matias Perez</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
export default AboutTeam;
