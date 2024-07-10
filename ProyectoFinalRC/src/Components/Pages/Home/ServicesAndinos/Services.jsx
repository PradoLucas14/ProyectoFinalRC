import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger , faChampagneGlasses , faIceCream } from '@fortawesome/free-solid-svg-icons';
import './Services.css';


function Services() {
  return (
    <div className='ServicesContainer'>
      <Container>
        <div className='tittleContainerServices'>
          <h2>Nuestros servicios</h2>
        </div>
        <Row className='imgContainers'>
          <Col md={4} className='mb-0'>
            <div className='imgContainer img1serv'>
              <div className="overlayImgServ">
                <div className="contenedorUno"></div>
                <div className="descContServ">
                  <div className="iconContServ">
                    <FontAwesomeIcon icon={faBurger} style={{ color: "orangered" }} />
                  </div>
                  <div className="textContServ">
                    <p>Platillos de especialidad</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className='mb-0'>
            <div className='imgContainer img2serv'>
              <div className="overlayImgServ">
                <div className="contenedorUno"></div>
                <div className="descContServ">
                  <div className="iconContServ">
                    <FontAwesomeIcon icon={faChampagneGlasses} style={{ color: "orangered" }}  />
                  </div>
                  <div className="textContServ">
                    <p>Cocteles personalizados</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className='mb-0'>
            <div className='imgContainer img3serv'>
              <div className="overlayImgServ">
                <div className="contenedorUno"></div>
                <div className="descContServ">
                  <div className="iconContServ">
                    <FontAwesomeIcon icon={faIceCream} style={{ color: "orangered" }}/>
                  </div>
                  <div className="textContServ">
                    <p>Reposteria casera</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
