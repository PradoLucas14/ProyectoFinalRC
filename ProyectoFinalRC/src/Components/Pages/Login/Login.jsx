// src/components/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // Importa Link y useNavigate
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Aquí iría tu lógica de autenticación
    if (email === 'user@example.com' && password === 'password') {
      // Redirigir a la página de inicio o dashboard después del login exitoso
      navigate('/');
    } else {
      setError('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className='login'>
      <Container className='loginContainer'>
        <div className="form-wrapper">
          <h2 className="text-center">Iniciar Sesión</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control className='inportForm'
                type="email"
                placeholder="Ingresa tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className='inportForm'
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
