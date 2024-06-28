import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImgGalery.css';

const images = [
    'https://t4.ftcdn.net/jpg/06/47/71/83/360_F_647718371_xhN1faW9v3b0juc7RSwn7QkWBprCXvCK.jpg',
    'https://t3.ftcdn.net/jpg/07/22/19/14/360_F_722191418_6Ug1PoUDRPzJUDSfrzhEGdhjQ8xNA7Nb.jpg',
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_nO5C52JZ0a23DFWGgg_PdIVztpWCXGquN07feIthWFqOaOI8AsvD04fmwCh8W5rNvzR771mMS5hZvawv8ZLxigkTobaBXWOucftz0jO5a6FZqUIWUSr1OJP5j0l0UO-ZUDGc1JqEiLDw/s1600/flan+de+maicena+blog.jpg',
    'https://www.cucinare.tv/wp-content/uploads/2023/05/milanesas.jpg',
    'https://elgourmet-assets.s3.amazonaws.com/wp-content/uploads/2023/03/al8czp9o56_tucumanodemilanesa.jpg',
    'https://static.wixstatic.com/media/690280_0dc7b2c099944e15831c07bfb90480a1~mv2.jpg/v1/fit/w_2500,h_1330,al_c/690280_0dc7b2c099944e15831c07bfb90480a1~mv2.jpg',
    'https://ae04.alicdn.com/kf/Se6fa964529a44a94ae4d55f60991eff6L.jpg',
    'https://cdn.pixabay.com/photo/2017/06/24/23/41/beer-2439237_640.jpg',
    'https://negociosdeargentina.com.ar/wp-content/uploads/2024/04/Helado-1.webp',
];

const Gallery = () => {
    return (
        <div className="Gallery">
          <Container className=" gallery-container">
            <div className='tittleContainerServices'>
              <h2 className="text-start mb-4 gallery-title">Galería de Imágenes</h2>
            </div>
            <Row>
                {images.map((image, index) => (
                    <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                        <Image src={image} alt={`Image ${index + 1}`} fluid className="gallery-image" />
                    </Col>
                ))}
            </Row>
            {/* Agregar el botón Ver más fotos */}
            <Row className="mt-4">
                <Col className="text-center">
                    <Link to="/error404" className="btn btn-primary">Ver más fotos</Link>
                </Col>
            </Row>
          </Container>
        </div>
    );
};

export default Gallery;
