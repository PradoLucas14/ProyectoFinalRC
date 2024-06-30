import React from 'react'
import "./Reservas.css"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Reservas = () => {
    const {register,handleSubmit}=useForm()

      const [selectedDate, setSelectedDate] = useState();
      const handleDataChange = event => {
        setSelectedDate(event.target.value);
        console.log(event.target.value)
        const fecha=new Date(event.target.value)
        console.log(fecha)
        console.log(fecha.getDay())

        // Verifica si la fecha seleccionada es domingo
        if (fecha.getDay() === 0) {
            alert('¡Nuestro restaurante abre de martes a domingos!');
            setSelectedDate(null); // Limpia la selección si es domingo
        }
    };
        
        
       
        const reserva=(data)=>{
            console.log(data)
        }
  return (
    <>
    <div className='reservas'>
        <Container className='containerFormReservas'>
            <h3>Reserva y disfruta de nuestras mejores comidas</h3>
            <Form onSubmit={handleSubmit(reserva)}>
                <Row >
                    
                    <Col md={6} >
                    <Form.Group>
                        <Form.Label>Ingrese nombre de titular:</Form.Label>
                        <Form.Control
                        type="text"
                        name="name"
                        placeholder="Ingresa un nombre"{...register('name')}
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cantidad de participantes:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cantidad de invitados"{...register('participantes')}
                            required
                            min={1}
                            max={15}
                        />
                    </Form.Group>
                    
                    </Col>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label>Celular para contactarnos:</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Numero de contacto"{...register('telefono')}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Elije una fecha:</Form.Label>
                        <Form.Control 
                            type='date'
                            value={selectedDate}
                            onChange={handleDataChange}
                            
                            placeholder='Selecciona una fecha'
                            {...register('date',{onChange:e=>handleDataChange(e)})}
                            
                            required
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type='submit'>Primary</Button>
            </Form>
        </Container>
    </div>
    </>
  )
}

export default Reservas