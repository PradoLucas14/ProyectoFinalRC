import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

const Admin = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Estado para manejar el modal de edición
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUsername] = useState('');
    const [accountActive, setAccountActive] = useState(true);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/users');
                setUsuarios(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsuarios();
    }, []);

    const handleEdit = (usuario) => {
        // Mostrar el modal de edición
        setCurrentUser(usuario);
        setUsername(usuario.username);
        setAccountActive(usuario.accountActive);
        setShowModal(true);
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3000/usuarios/${currentUser.id}`, {
                ...currentUser,
                username,
                accountActive,
            });

            // Actualizar la lista de usuarios
            setUsuarios(usuarios.map(usuario =>
                usuario.id === currentUser.id
                    ? { ...usuario, username, accountActive }
                    : usuario
            ));

            Swal.fire(
                '¡Actualizado!',
                'El usuario ha sido actualizado.',
                'success'
            );

            // Cerrar el modal
            setShowModal(false);
        } catch (err) {
            Swal.fire(
                'Error',
                'Hubo un problema al actualizar el usuario.',
                'error'
            );
        }
    };

    const handleDelete = async (id) => {
        try {
            const result = await Swal.fire({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            });

            if (result.isConfirmed) {
                await axios.delete(`http://localhost:3000/usuarios/${id}`);
                setUsuarios(usuarios.filter(usuario => usuario.id !== id));

                Swal.fire(
                    '¡Eliminado!',
                    'El usuario ha sido eliminado.',
                    'success'
                );
            }
        } catch (err) {
            Swal.fire(
                'Error',
                'Hubo un problema al eliminar el usuario.',
                'error'
            );
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="admin">
            <div className="bannerAdmin">
                <div className="overlayBannerAdmin">
                    <h2>Administrador</h2>
                </div>
            </div>
            <div className="container mt-4">
                <h2>Usuarios:</h2>
                <div className="table-responsive mt-4">
                    <table className="table table-dark table-striped table-bordered text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Nombre de usuario</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Estado de cuenta</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.id}</td>
                                    <td>{usuario.username}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.role}</td>
                                    <td>{usuario.accountActive ? 'Activo' : 'Inactivo'}</td>
                                    <td>
                                        <button
                                            className="btn btn-info btn-sm mr-2"
                                            onClick={() => handleEdit(usuario)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(usuario.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal de edición */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden={!showModal}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Editar Usuario</h5>
                            <button type="button" className="close" onClick={() => setShowModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Nombre de usuario</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="accountActive">Estado de cuenta</label>
                                    <select
                                        className="form-control"
                                        id="accountActive"
                                        value={accountActive}
                                        onChange={(e) => setAccountActive(e.target.value === 'true')}
                                    >
                                        <option value={true}>Activo</option>
                                        <option value={false}>Inactivo</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar cambios</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
