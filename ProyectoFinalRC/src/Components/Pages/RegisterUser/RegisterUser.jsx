import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./RegisterUser.css"

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        // Validación de campos obligatorios
        if (!formData.username || !formData.email || !formData.password) {
            toast.error('Por favor completa todos los campos');
            return;
        }

        // Validaciones individuales
        if (!validateUsername(formData.username)) {
            toast.error('El nombre de usuario debe tener más de 6 caracteres');
            return;
        }

        if (!validatePassword(formData.password)) {
            toast.error('La contraseña debe tener entre 6 y 20 caracteres');
            return;
        }

        // Establecer valores fijos para rol y estado de cuenta
        const userData = {
            ...formData,
            role: 'cliente',
            accountActive: true
        };

        // Simular registro exitoso (aquí deberías enviar los datos al backend)
        toast.success('Registro exitoso');
        setFormData({ username: '', email: '', password: '' }); // Limpiar el formulario después del registro
        console.log('Datos a enviar:', userData);
    };

    const validateUsername = username => {
        return username.length > 6;
    };

    const validatePassword = password => {
        return password.length >= 6 && password.length <= 20;
    };

    return (
        <div className='register'>
           <div className="containerRegister">
                <h2 className="mb-4">Registro de Usuario</h2>
                <ToastContainer position="top-right" autoClose={5000} />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de Usuario:</Form.Label>
                        <Form.Control className='input'
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control className='input'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control className='input'
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>
                </Form>
            </div>
        </div>        
    );
};

export default RegisterForm;
