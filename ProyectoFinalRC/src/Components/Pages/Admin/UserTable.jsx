// src/UserTable.js

import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = ({ users, onEditUser, onDeleteUser }) => {
  return (
    <Table striped bordered hover variant="dark" className="fixed-height-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre de Usuario</th>
          <th>Email</th>
          <th>Estado de Cuenta</th>
          <th>Rol</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.accountActive ? 'Activo' : 'Inactivo'}</td>
            <td>{user.role}</td>
            <td>
              <Button 
                variant="warning" 
                onClick={() => onEditUser(user)}
              >
                Editar
              </Button>
              <Button 
                variant="danger" 
                onClick={() => onDeleteUser(user.id)}
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserTable;
