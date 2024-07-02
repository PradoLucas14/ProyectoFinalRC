// src/components/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate
import './Login.css';
import { useForm } from 'react-hook-form';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors }}=useForm({mode: 'onBlur'})

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   // Aquí iría tu lógica de autenticación
  //   if (email === 'user@example.com' && password === 'password') {
  //     // Redirigir a la página de inicio o dashboard después del login exitoso
  //     navigate('/');
  //   } else {
  //     setError('Correo electrónico o contraseña incorrectos');
  //   }
  // };
  const loginData=async(data)=>{
    // //{
    //   "username": "LucasPrado",
    //   "email": "lukasnahuelprado@gmail.com",
    //   "password": "AaNl0019",
    //   "termsAccepted": true,
    //   "role": "cliente",
    //   "accountActive": true,
    //   "id": 2
    // },
    const response=await fetch('http://localhost:3000/usuarios')
    const usuarios=await response.json()
    console.log(usuarios)
    const id=usuarios.forEach(element => {
      if(element.email===data.email && element.password===data.password){
        console.log('exito')
      }

    });
    alert('Usuario no encontrado')

  }

  return (
    <div className='login'>
      <Container className='loginContainer'>
        <div className="form-wrapper">
          <h2 className="text-center">Iniciar Sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit(loginData)}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Ingrese correo:</Form.Label>
                  <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingresa un correo electrónico"
                      {...register('email', {
                          required: 'Este mail es requerido',
                          minLength: {
                              value: 5,
                              message: 'El email debe tener al menos 5 caracteres'
                          },
                          maxLength: {
                              value: 30,
                              message: 'El email no debe exceder los 30 caracteres'
                          }
                      })}
                      className={errors.name ? 'error-input' : ''}
                   />
                {errors.email && <span className="error">{errors.email.message}</span>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className='inportForm'
                type="password"
                placeholder="Ingresa tu contraseña"
                {...register('password',{
                  required:'La contraseña es requerida',
                  minLength:{
                    value:6,
                    message:'Las contraseñas tienen un minimo de 6 caracteres'
                  }
                })}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Iniciar Sesión
            </Button>
          </Form>
          <p className="text-center mt-3">
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="register-link">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
