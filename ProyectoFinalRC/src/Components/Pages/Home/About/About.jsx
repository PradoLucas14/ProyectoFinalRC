import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='aboutAndinos'>
        <div className="overlayAboutAndinos">
            <div className='andinosContainer'>
                <div className="columAbout columOneAbout">
                    <div className="ovelayImg">
                    </div>
                </div>
                <div className="columAbout columTwoAbout">
                    <div className="tittleContainer">
                        <h3>Somos Andinos</h3>
                    </div>
                    <div className="textContainerAbout">
                        <p>
                            Restaurante Andinos celebra la riqueza de la gastronomía nacional, ofreciendo platos autóctonos y
                            modernas fusiones internacionales con ingredientes frescos y técnicas tradicionales. Ubicado en el corazón de la ciudad, 
                            Andinos combina sabores intensos en un ambiente acogedor que transporta a los comensales a los diferentes ricones de nuestro hermoso pais. 
                            Disfruta de una experiencia culinaria única y auténtica con cada bocado.
                        </p>
                    </div>
                    <div className="hoursContainer">
                        <p>Te esperamos de todos los dias de 9:00 a 23:00</p>
                    </div>
                    <div className="btnContainerAbout">
                        <button>
                            <p>Ver más</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
