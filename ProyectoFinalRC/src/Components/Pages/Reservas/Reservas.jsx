import React from 'react'
import "./Reservas.css"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Reservas = () => {
    const {register,handleSubmit,formState: { errors }}=useForm({mode: 'onBlur'})

      const [selectedDate, setSelectedDate] = useState('');
      const [horariosDisponibles,setHorariosDisponibles]=useState([])
      const handleTimeChange = event => {
        const selectedTime = event.target.value;
        const selectedHour = parseInt(selectedTime.split(':')[0], 10);
        if (selectedHour < 15 || selectedHour > 23) {
            alert('No recibimos reservas en ese horario. Por favor, elige entre las 15:00 y las 23:00.');
            event.target.value = '';
        }
    };
      const handleDataChange = event => {
        
        console.log(event.target.value)
        const fecha=new Date(event.target.value)
        console.log(fecha)
        console.log(fecha.getDay())

        // Verifica si la fecha seleccionada es domingo
        if (fecha.getDay() === 0) {
            alert('¡Nuestro restaurante abre de martes a domingos!');
            setSelectedDate(''); // Limpia la selección si es lunes
        }else{
            setSelectedDate(event.target.value);
        }
    };
        
        
       
        const reserva=async (data)=>{
            let options=[]
            //const fecha=new Date(data.date)
            //console.log(fecha)
            //aqui se hace el submit y deberia buscar en la base de datos los que coincidan de fecha
            //usamos fecha para buscar por ese parámetro
            //entonces primero buscamos en base de datos
            //devolvemos los horarios ya tomados con el mismo dias
            //recordemos que cada uno cubre dos horas
            //o bien ofrecer reservas cada dos horas: 15 hasta 17
            //opcion2 17 a 19
            //opcion 3 19 a 21
            //opcion4 21 a 23hs
            //opcion 5 23 a 01hs
            //para no hacernos mas problemas usaremos el segundo caso
            //primero si esta todo correcto y le da al submit que aparezca la tabla 
            console.log(data)
            const fecha=data.date
            console.log(fecha)
            //aqui consultamos los horarios que ya hayan sido tomados en esas fechas,osea las opciones tomadas
            try {
                const response=await fetch("http://localhost:3000/reservas")
                const datos=await response.json()
                console.log(datos)
                datos.forEach(element => {
                if(element.date===fecha){
                    options.push(element.option)
                }
            });
            const disponibles=todasLasOpciones.filter(opcion=>!options.includes(opcion))
            setHorariosDisponibles(disponibles)
            console.log(disponibles)
            } catch (error) {
                alert('Error:',error)
            }
        }
  return (
    <>
    <div className='reservas'>
        <Container className='containerFormReservas'>
            <h3>Reserva y disfruta de nuestras mejores comidas</h3>
            <Form onSubmit={handleSubmit(reserva)}>
                <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Ingrese nombre de titular:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Ingresa un nombre"
                                    {...register('name', {
                                        required: 'El nombre es requerido',
                                        minLength: {
                                            value: 2,
                                            message: 'El nombre debe tener al menos 2 caracteres'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'El nombre no debe exceder los 30 caracteres'
                                        },
                                        pattern: {
                                            value: /^[A-Za-zÁ-ý\s]+$/,
                                            message: 'El nombre no debe contener números ni caracteres especiales'
                                        }
                                    })}
                                    className={errors.name ? 'error-input' : ''}
                                />
                                {errors.name && <span className="error">{errors.name.message}</span>}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cantidad de participantes:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Cantidad de invitados"
                                    {...register('participantes', {
                                        required: 'La cantidad de participantes es requerida',
                                        min: {
                                            value: 1,
                                            message: 'Debe haber al menos 1 participante'
                                        },
                                        max: {
                                            value: 15,
                                            message: 'No se pueden registrar más de 15 participantes'
                                        }
                                    })}
                                    className={errors.participantes ? 'error-input' : ''}
                                />
                                {errors.participantes && <span className="error">{errors.participantes.message}</span>}
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label>Ingrese correo:</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Ingresa un correo electrónico"
                                    {...register('email', {
                                        required: TextTrackCueList,
                                        minLength: {
                                            value: 5,
                                            message: 'El email debe tener al menos 2 caracteres'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'El email no debe exceder los 30 caracteres'
                                        }
                                    })}
                                    className={errors.name ? 'error-input' : ''}
                                />
                                {errors.name && <span className="error">{errors.name.message}</span>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Celular para contactarnos:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Numero de contacto"
                                    {...register('telefono', {
                                        required: true,
                                        minLength: {
                                            value: 3,
                                            message: 'El número de teléfono debe tener al menos 3 dígitos'
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: 'El número de teléfono no debe exceder los 10 dígitos'
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: 'El campo debe contener solo números'
                                        }
                                    })}
                                    className={errors.telefono ? 'error-input' : ''}
                                />
                                {errors.telefono && <span className="error">{errors.telefono.message}</span>}
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Elije una fecha:</Form.Label>
                                <Form.Control
                                    type='date'
                                    onChange={handleDataChange}
                                    placeholder='Selecciona una fecha'
                                    {...register('date', {
                                        required: true
                                    })}
                                    className={errors.date ? 'error-input' : ''}
                                />
                                {errors.date && <span className="error">{errors.date.message}</span>}
                            </Form.Group>
                            <Form.Group>
                    <Form.Label>Elije una horario aproximado de llegada:</Form.Label>
                                    <Form.Control
                                        type='time'
                                        onChange={handleTimeChange}
                                        min="15:00"
                                        max="23:00"
                                        step="3600"
                                    />
                            </Form.Group>
                        </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Check
                            type="checkbox"
                            label={
                                <>
                                    Acepto los{' '}
                                    <a href="/ruta-a-términos-y-condiciones">Términos y Condiciones</a>
                                </>
                            }
                            required
                            />
                    </Col>
                        </Row>
                        {errors.acceptTerms && <span className="error">Debes aceptar los términos y condiciones para continuar.</span>}
                        <Button variant="primary" type='submit' className='my-2 mx-auto'>Reservar</Button>
                       
            </Form>
        </Container>
    </div>
    </>
  )
}

export default Reservas