// src/CreateUserModal.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CreateUserModal = ({ show, onClose, onCreate }) => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    role: 'cliente',
    accountActive: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newUser);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control 
              type="text" 
              name="username"
              value={newUser.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email"
              value={newUser.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control 
              type="password" 
              name="password"
              value={newUser.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Rol</Form.Label>
            <Form.Control 
              as="select" 
              name="role"
              value={newUser.role}
              onChange={handleChange}
            >
              <option value="cliente">Cliente</option>
              <option value="administrador">Administrador</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formAccountActive">
            <Form.Label>Estado de Cuenta</Form.Label>
            <Form.Control 
              as="select" 
              name="accountActive"
              value={newUser.accountActive}
              onChange={handleChange}
            >
              <option value={true}>Activo</option>
              <option value={false}>Inactivo</option>
            </Form.Control>
          </Form.Group>
          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose}>Cerrar</Button>
            <Button variant="primary" type="submit">Crear Usuario</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUserModal;
