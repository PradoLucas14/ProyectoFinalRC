
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './Contact.css'; 
import { useState } from 'react';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
//Esta ultima linea muestra un error ya que submitted es asignada pero no usada,sin embargo no interfiere al momento de correr el programa
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }
    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.length > 100) {
      errors.message = 'El mensaje no puede tener más de 100 caracteres';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setErrors({});
      setSubmitted(true);
      console.log('Formulario enviado:', formData);
      Swal.fire({
        title: '¡Éxito!',
        text: 'Formulario enviado con éxito.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      setFormData(initialFormData); // Limpiar el formulario después de enviar
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    } else {
      setErrors(errors);
      setSubmitted(false);
    }
  };

  return (
    <div className="Contact">
      <Container className="contact-form-container">
        <h1 className="mt-0">Contacto</h1>
        <Form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                  placeholder="Ingresa tu nombre"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  placeholder="Ingresa tu email"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  rows={6} // Puedes ajustar este valor según el alto que necesites
                  placeholder="Ingresa tu mensaje"
                  maxLength={100}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
