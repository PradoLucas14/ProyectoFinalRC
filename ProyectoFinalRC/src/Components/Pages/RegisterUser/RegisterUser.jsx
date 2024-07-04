import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './RegisterUser.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    termsAccepted: false,
  });
//   const [showVerificationModal, setShowVerificationModal] = useState(false);
//   const [verificationCode, setVerificationCode] = useState('');
//   const [enteredCode, setEnteredCode] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    // Validación de campos obligatorios
    if (!formData.username || !formData.email || !formData.password) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor completa todos los campos',
      });
      return;
    }

    // Validaciones individuales
    if (!validateUsername(formData.username)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El nombre de usuario debe tener más de 6 caracteres',
      });
      return;
    }

    if (!validatePassword(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'La contraseña debe tener entre 6 y 20 caracteres',
      });
      return;
    }

    // Validación de aceptación de términos
    if (!formData.termsAccepted) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes aceptar los términos y condiciones',
      });
      return;
    }

    // Enviar código de verificación
//     try {
//         console.log('entre a la verificacion de codigo')

//       const response = await fetch('http://localhost:3001/api/send-verification-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: formData.email }),
//       });
//       console.log(response.status)
//       if (response.ok) {

//         setShowVerificationModal(true);
//       } else {
//         console.log()
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Error al enviar el código de verificación',
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'Error al enviar el código de verificación',
//       });
//     }
//   };

//   const handleVerification = async () => {
//     try {
//         console.log('Ingrese al verify code')
//       const response = await fetch('http://localhost:3001/api/verify-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: formData.email, code: enteredCode }),
//       });

//       if (response.ok) {
        // Registro del usuario
        const userData = { ...formData, role: 'cliente', accountActive: true };
        console.log(userData)
        try {
            const registerResponse = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              });
      
              if (registerResponse.ok) {
                Swal.fire({
                  icon: 'success',
                  title: 'Registro exitoso',
                  text: 'Te has registrado exitosamente',
                });
                setFormData({ username: '', email: '', password: '', termsAccepted: false });
                // setShowVerificationModal(false);
              } else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Error en el registro',
                });
              }
        } catch (error) {
            console.log(error)
            alert('Error con el servidor:',error)
        }
        
    //   } else {

    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error',
    //       text: 'Código de verificación inválido',
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Error',
    //     text: 'Error en la verificación',

        
    //   });
    // }
  };

  const validateUsername = (username) => {
    return username.length > 6 && username.length <= 30;
  };

  const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 20;
  };

  return (
    <div className='register'>
      <div className='containerRegister'>
        <h2 className='mb-4'>Registro de Usuario</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3'>
            <Form.Label>Nombre de Usuario:</Form.Label>
            <Form.Control
              className='input'
              type='text'
              name='username'
              placeholder='Ingresa tu nombre'
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              className='input'
              type='email'
              name='email'
              placeholder='Ingresa tu Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              className='input'
              type='password'
              name='password'
              placeholder='Ingresa tu contraseña'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Check
              type='checkbox'
              name='termsAccepted'
              label='Acepto los términos y condiciones'
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Registrarse
          </Button>
        </Form>
      </div>

      {/* <Modal show={showVerificationModal} onHide={() => setShowVerificationModal(true)}>
        <Modal.Header>
          <Modal.Title>Verificación de Correo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Código de Verificación:</Form.Label>
            <Form.Control
              type='text'
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
              placeholder='Ingresa el código enviado a tu correo'
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={() => {
              Swal.fire({
                title: '¿Estás seguro?',
                text: 'Si sales, el registro será cancelado.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, salir',
                cancelButtonText: 'No, permanecer',
              }).then((result) => {
                if (result.isConfirmed) {
                  setShowVerificationModal(false);
                  setFormData({ username: '', email: '', password: '', termsAccepted: false });
                }
              });
            }}
          >
            Cancelar
          </Button>
          <Button variant='primary' onClick={handleVerification}>
            Verificar
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default RegisterForm;