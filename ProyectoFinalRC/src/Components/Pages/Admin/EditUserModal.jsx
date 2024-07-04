// src/EditUserModal.js

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditUserModal = ({ user, show, onClose, onEdit }) => {
  const [editedUser, setEditedUser] = useState({
    username: '',
    accountActive: 'activo',
  });

  useEffect(() => {
    if (user) {
      setEditedUser({
        username: user.username,
        accountActive: user.accountActive ? 'activo' : 'inactivo',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({
      ...user,
      username: editedUser.username,
      accountActive: editedUser.accountActive === 'activo',
    });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control 
              type="text" 
              name="username"
              value={editedUser.username}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAccountActive">
            <Form.Label>Estado de Cuenta</Form.Label>
            <Form.Control 
              as="select" 
              name="accountActive"
              value={editedUser.accountActive}
              onChange={handleChange}
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Form.Control>
          </Form.Group>
          <div className="modal-footer">
            <Button variant="secondary" onClick={onClose}>Cerrar</Button>
            <Button variant="primary" type="submit">Actualizar Usuario</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditUserModal;
