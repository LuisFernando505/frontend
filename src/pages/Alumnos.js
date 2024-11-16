import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAlumnos, deleteAlumno } from '../services/api'; // Importa las funciones desde api.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/table.css';

const Alumnos = () => {
    const [alumnos, setAlumnos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAlumnos();
    }, []);

    const fetchAlumnos = async () => {
        try {
            const data = await getAlumnos();
            setAlumnos(data);
        } catch (error) {
            console.error('Error fetching alumnos:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-alumno/${id}`);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este alumno?');
        if (confirmDelete) {
            try {
                await deleteAlumno(id);
                setAlumnos(alumnos.filter(alumno => alumno.id !== id));
                alert('Alumno eliminado correctamente');
            } catch (error) {
                console.error('Error eliminando alumno:', error);
                alert('Hubo un error al eliminar el alumno');
            }
        }
    };

    const handleAdd = () => {
        navigate('/add-alumno');
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Listado de Alumnos</h1>
                <button className="add-button" onClick={handleAdd}>
                    <i className="fas fa-plus"></i> Agregar Nuevo Alumno
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Número de Control</th>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Carrera</th>
                            <th>Semestre</th>
                            <th>Grupo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(alumnos) && alumnos.map(alumno => (
                            <tr key={alumno.id}>
                                <td>{alumno.numero_control}</td>
                                <td>{alumno.nombre}</td>
                                <td>{alumno.apellido_paterno}</td>
                                <td>{alumno.apellido_materno}</td>
                                <td>{alumno.fecha_nacimiento}</td>
                                <td>{alumno.correo_electronico}</td>
                                <td>{alumno.numero_telefono}</td>
                                <td>{alumno.carrera}</td>
                                <td>{alumno.semestre}</td>
                                <td>{alumno.grupo}</td>
                                <td>
                                    <button className="edit-button" onClick={() => handleEdit(alumno.id)}>
                                        <i className="fas fa-edit"></i> Editar
                                    </button>
                                    <button className="delete-button" onClick={() => handleDelete(alumno.id)}>
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

export default Alumnos;