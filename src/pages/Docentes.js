import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDocentes, deleteDocente } from '../services/api'; // Importa las funciones desde api.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/table.css';

const Docentes = () => {
    const [docentes, setDocentes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchDocentes();
    }, []);

    const fetchDocentes = async () => {
        try {
            const data = await getDocentes();
            setDocentes(data);
        } catch (error) {
            console.error('Error fetching docentes:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-docente/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este docente?');
        if (confirmDelete) {
            try {
                await deleteDocente(id);
                setDocentes(docentes.filter(docente => docente.id !== id));
                alert('Docente eliminado correctamente');
            } catch (error) {
                console.error('Error eliminando docente:', error);
                alert('Hubo un error al eliminar el docente');
            }
        }
    };

    const handleAdd = () => {
        navigate('/add-docente');
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Listado de Docentes</h1>
                <button className="add-button" onClick={handleAdd}>
                    <i className="fas fa-plus"></i> Agregar Nuevo Docente
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Número de Empleado</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Fecha Nacimiento</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Departamento</th>
                            <th>Especialidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(docentes) && docentes.map(docente => (
                            <tr key={docente.id}>
                                <td>{docente.numero_empleado}</td>
                                <td>{docente.nombre}</td>
                                <td>{docente.apellido_paterno}</td>
                                <td>{docente.apellido_materno}</td>
                                <td>{docente.fecha_nacimiento}</td>
                                <td>{docente.correo_electronico}</td>
                                <td>{docente.numero_telefono}</td>
                                <td>{docente.departamento}</td>
                                <td>{docente.especialidad}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(docente.id)}>
                                        <i className="fas fa-edit"></i> Editar
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(docente.id)}>
                                        <i className="fas fa-trash"></i> Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Docentes;