// src/components/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate
import './Login.css';
import { jwtDecode } from 'jwt-decode'
import { useForm } from 'react-hook-form';
import { enqueueSnackbar } from 'notistack';
const LoginPage = ({setUser}) => {
 
  const navigate = useNavigate();
  const {register,handleSubmit,formState: { errors }}=useForm({mode: 'onBlur'})

  const loginData=async(data)=>{
    try {
      const response=await fetch('http://localhost:3001/api/login',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify(data)
      })
      const loginData=await response.json()
      if(response.status!=200){        
        enqueueSnackbar(loginData.message,{variant:'error'})
    }
      if(response.status===200){
        
        enqueueSnackbar(loginData.message,{variant:'succes'})
      }
      
      const decoded=jwtDecode(loginData.accesToken)
      localStorage.setItem('isUserLogged',true)
         localStorage.setItem('token',loginData.accesToken)
        setUser({
          token:loginData.accesToken,
          id:decoded.userId,        
        isLoggedIn:true,
        role:decoded.userRole,
        })
        navigate('/');
    
    } catch (error) {
      alert(error)
    }

  }

  return (
    <div className='login'>
      <Container className='loginContainer'>
        <div className="form-wrapper">
          <h2 className="text-center">Iniciar Sesión</h2>
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
