// src/Admin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './UserTable';
import CreateUserModal from './CreateUserModal';
import EditUserModal from './EditUserModal';
import Pagination from './Pagination';
import Swal from 'sweetalert2';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    axios.get('http://localhost:3000/usuarios')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleCreateUser = (newUser) => {
    axios.post('http://localhost:3000/usuarios', newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setShowCreateModal(false);
        Swal.fire({
          title: 'Éxito!',
          text: 'Usuario creado correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      })
      .catch(error => {
        console.error('Error creating user:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un problema al crear el usuario.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  };

  const handleEditUser = (updatedUser) => {
    axios.patch(`http://localhost:3000/usuarios/${updatedUser.id}`, updatedUser)
      .then(response => {
        setUsers(users.map(user => user.id === updatedUser.id ? response.data : user));
        setShowEditModal(false);
        Swal.fire({
          title: 'Éxito!',
          text: 'Usuario actualizado correctamente.',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      })
      .catch(error => {
        console.error('Error editing user:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un problema al actualizar el usuario.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  };

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás deshacer esta acción.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/usuarios/${id}`)
          .then(() => {
            setUsers(users.filter(user => user.id !== id));
            Swal.fire(
              'Eliminado!',
              'El usuario ha sido eliminado.',
              'success'
            );
          })
          .catch(error => {
            console.error('Error deleting user:', error);
            Swal.fire({
              title: 'Error!',
              text: 'Hubo un problema al eliminar el usuario.',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          });
      }
    });
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="admin-container">
      <h1 className="title">Administrador</h1>
      <div className="users-header-container">
        <h2 className="table-title">Usuarios</h2>
        <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
          Crear Usuario
        </button>
      </div>
      <UserTable 
        users={currentUsers}
        onEditUser={(user) => {
          setCurrentUser(user);
          setShowEditModal(true);
        }}
        onDeleteUser={handleDeleteUser}
      />
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={page => setCurrentPage(page)}
      />
      <CreateUserModal 
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreate={handleCreateUser}
      />
      {currentUser && (
        <EditUserModal 
          user={currentUser}
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          onEdit={handleEditUser}
        />
      )}
    </div>
  );
};

export default Admin;
