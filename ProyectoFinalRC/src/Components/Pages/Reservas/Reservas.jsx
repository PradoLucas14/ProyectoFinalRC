import React from 'react'
import "./Reservas.css"
import Calendario from '../../Layout/Calendario/Calendario'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Reservas = () => {
    const {register,handleSubmit}=useForm()

    function obtenerFechaActual() {
        const fechaActual = new Date();
        // const dia = fechaActual.getDate();
        // const mes = fechaActual.getMonth() + 1;
        // const año = fechaActual.getFullYear();
      
        // const fechaFormateada = `${dia}/${mes}/${año}`;
      
        return fechaActual;
      }
    const initialFormData = {
        name: '',
        email: '',
        telephone: '',
        date:null
      };
      const [selectedDate, setSelectedDate] = useState('');
      const handleDataChange=date=>{
          setSelectedDate(date);
          //aqui verifico que no sea lunes ya que los lunes lo abrimos
          if(date.getDay()===1){
              alert('¡Solo abrimos de martes a domingos!')
              setSelectedDate(null)
            }
        }
        
        
       
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
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cantidad de participantes:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Cantidad de invitados"{...register('participantes')}
                        />
                    </Form.Group>
                    
                    </Col>
                    <Col md={6}>
                    <Form.Group>
                        <Form.Label>Celular para contactarnos:</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Numero de contacto"{...register('telefono')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Elije una fecha:</Form.Label>
                        <Form.Control 
                            type='date'
                            onChange={handleDataChange}
                            value={selectedDate}
                            placeholder='Selecciona una fecha'{...register('date')}
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary">Primary</Button>
            </Form>
        </Container>
    </div>
    </>
  )
}

export default Reservas