import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './About.css';
import img1 from "../../../../assets/Img/ImgHome/Img-About-2.jpg";

function About() {
  return (
    <div className='aboutAndinos'>
      <div className="overlayAboutAndinos">
        <Container className='aboutContainer'>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="columAbout columOneAbout">
              <img src={img1} alt="" className="img-fluid" />
            </Col>
            <Col xs={12} md={6} className="columAbout columTwoAbout">
              <div className="tittleContainer">
                <h3>Somos Andinos</h3>
              </div>
              <div className="textContainer">
                <p>
                  Restaurante Andinos celebra la riqueza de la gastronomía nacional, ofreciendo platos autóctonos y
                  modernas fusiones internacionales con ingredientes frescos y técnicas tradicionales. Ubicado en el corazón de la ciudad,
                  Andinos combina sabores intensos en un ambiente acogedor que transporta a los comensales a los diferentes rincones de nuestro hermoso país.
                  Disfruta de una experiencia culinaria única y auténtica con cada bocado.
                </p>
              </div>
              <div className="hoursContainer">
                <p>Te esperamos todos los días de 9:00 a 23:00</p>
              </div>
              <div className="btnContainer">
                <Button variant="warning" className='btnCustom'>Ver más</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
