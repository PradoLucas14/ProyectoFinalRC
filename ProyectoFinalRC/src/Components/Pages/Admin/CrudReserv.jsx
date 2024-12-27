// src/components/Reservas.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reservas = () => {
  const [reservas, setReservas] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [formValues, setFormValues] = useState({
    participants: '',
    date: '',
    hora: ''
  });
  const [newReserva, setNewReserva] = useState({
    name: '',
    telephone: '',
    participants: '',
    date: '',
    hora: '',
    email: ''
  });

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/reservas');
        setReservas(response.data);
      } catch (error) {
        console.error('Error al obtener reservas', error);
      }
    };

    fetchReservas();
  }, []);

  const handleEditShow = (reserva) => {
    setEditData(reserva);
    setFormValues({
      participants: reserva.participants,
      date: new Date(reserva.date).toISOString().split('T')[0],
      hora: reserva.hora
    });
    setShowEditModal(true);
  };

  const handleEditClose = () => setShowEditModal(false);

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleEditSubmit = async () => {
    try {
      await axios.patch(`http://localhost:3001/api/reservas/${editData._id}`, formValues);
      setReservas(reservas.map(reserva =>
        reserva._id === editData._id ? { ...reserva, ...formValues } : reserva
      ));
      Swal.fire('Actualizado!', 'La reserva ha sido actualizada.', 'success');
      handleEditClose();
    } catch (error) {
      console.error('Error al actualizar la reserva', error);
      Swal.fire('Error!', 'No se pudo actualizar la reserva.', 'error');
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás recuperar esta reserva!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3001/api/reservas/${id}`);
          setReservas(reservas.filter(reserva => reserva._id !== id));
          Swal.fire('Eliminado!', 'La reserva ha sido eliminada.', 'success');
        } catch (error) {
          console.error('Error al eliminar la reserva', error);
          Swal.fire('Error!', 'No se pudo eliminar la reserva.', 'error');
        }
      }
    });
  };

  const handleAddShow = () => setShowAddModal(true);

  const handleAddClose = () => setShowAddModal(false);

  const handleNewFormChange = (e) => {
    const { id, value } = e.target;
    setNewReserva((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleAddSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/reservas', newReserva);
      const addedReserva = response.data; // Obtener la reserva completa con el ID generado
      setReservas([...reservas, addedReserva]);
      Swal.fire('Registrado!', 'La reserva ha sido registrada.', 'success');
      handleAddClose();
    } catch (error) {
      console.error('Error al registrar la reserva', error);
      Swal.fire('Error!', 'No se pudo registrar la reserva.', 'error');
    }
  };

  return (
    <div className="reservas-container container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Listado de Reservas: </h1>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="table-dark table-bordered text-center">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Participantes</th>
              <th>Email</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva._id}>
                <td>{reserva.name}</td>
                <td>{reserva.telephone}</td>
                <td>{reserva.participants}</td>
                <td>{reserva.email}</td>
                <td>{new Date(reserva.date).toLocaleDateString()}</td>
                <td>{reserva.hora}</td>
                <td>
                  <Button onClick={() => handleEditShow(reserva)} variant="success" className="me-2">Editar</Button>
                  <Button onClick={() => handleDelete(reserva._id)} variant="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal para Editar Reserva */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Participantes</Form.Label>
              <Form.Control
                type="number"
                id="participants"
                value={formValues.participants}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={formValues.date}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                id="hora"
                value={formValues.hora}
                onChange={handleFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal para Registrar Nueva Reserva */}
      <Modal show={showAddModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar Nueva Reserva</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={newReserva.name}
                onChange={handleNewFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                id="telephone"
                value={newReserva.telephone}
                onChange={handleNewFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Participantes</Form.Label>
              <Form.Control
                type="number"
                id="participants"
                value={newReserva.participants}
                onChange={handleNewFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                id="date"
                value={newReserva.date}
                onChange={handleNewFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                id="hora"
                value={newReserva.hora}
                onChange={handleNewFormChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={newReserva.email}
                onChange={handleNewFormChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAddSubmit}>
            Registrar Reserva
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Reservas;
