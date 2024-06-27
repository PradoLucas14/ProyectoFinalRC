import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Productos.css';

const productosData = [
    { id: 1, name: 'Hamburgueza', price: '$100', image: 'https://w.forfun.com/fetch/7f/7fe483bfb112ec5acd4eb9fd4b93bd19.jpeg' },
    { id: 2, name: 'Pizza', price: '$150', image: 'https://c4.wallpaperflare.com/wallpaper/1017/647/742/food-pizza-cheese-tomatoes-olives-hd-wallpaper-preview.jpg' },
    { id: 3, name: 'Empanadas', price: '$200', image: 'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_47tmx80joc_empandascarnejpg-1024x683.jpg.webp' },
]

const Productos = () => {
    return (
        <div className='Productos'>
            <Container className="Contanier">
                <div className='tittleContainerServices'>
                    <h2 className="text-start mb-4 tittleProductos">Top de Productos</h2>
                </div>
            <Row>
                {productosData.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
                        <Card className="h-100 product-card">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
};

export default Productos;
