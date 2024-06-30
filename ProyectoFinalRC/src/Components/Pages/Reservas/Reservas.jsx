import React from 'react'
import "./Reservas.css"
import Calendario from '../../Layout/Calendario/Calendario'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Reservas = () => {
    const initialFormData = {
        name: '',
        email: '',
        telephone: '',
        date:null
      };


  return (
    <>
    <div className='reservas'>
        <Container className='container-form-reservas'>
            <h3>Reserva y disfruta de nuestras mejores comidas</h3>
            <Form className='form-reservas d-flex flex-column '>
                <Row className='row-form-reservas'>
                    
                    <Col md={6} className='col-form-reservas'>
                    <Form.Group>
                        <Form.Label>Ingrese nombre de titular:</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Ingresa un nombre"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cantidad de participantes:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cantidad de invitados"
                        />
                    </Form.Group>
                    
                    </Col>
                    <Col md={6} className='col-form-reservas'>
                    <Form.Group>
                        <Form.Label>Celular para contactarnos:</Form.Label>
                        <Form.Control
                            type="telephone"
                            placeholder="Numero de contacto"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Elije una fecha:</Form.Label>
                        <Calendario/>
                    </Form.Group>
                    </Col>
                </Row>
                <Button className='boton-reserva '>Reservar</Button>
            </Form>
        </Container>




    </div>
    </>
  )
}

export default Reservas