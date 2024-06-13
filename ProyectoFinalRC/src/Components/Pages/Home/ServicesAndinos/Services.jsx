import React from 'react'
import "./Services.css"
import img1 from "../../../../assets/Img/ImgHome/empanada.png"
import img2 from "../../../../assets/Img/ImgHome/coctel-con-rodaja-de-limon.png"
import img3 from "../../../../assets/Img/ImgHome/pastel.png"

function Services() {
  return (
    <div className='ServicesContainer'>
        <div className='tittleContainerServices'>
            <h2>Nuestros servicios</h2>
        </div>
        <div className='cardsContainer'>
            <div className="card card1">
                <div className="cardOverlay">
                    <div className="imgContainer">
                        <img src={img1} alt="" />
                    </div>
                    <p>Comida tradicional</p>
                </div>
            </div>
            <div className="card card2">
                <div className="cardOverlay">
                <div className="imgContainer">
                        <img src={img2} alt="" />
                    </div>
                    <p>Cocteles</p>
                </div>
            </div>
            <div className="card card3">
                <div className="cardOverlay">
                <div className="imgContainer">
                        <img src={img3} alt="" />
                    </div>                    
                    <p>Reposteria</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
