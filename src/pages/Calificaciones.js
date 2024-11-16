import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Ajusta la ruta según la estructura de tu proyecto
import Footer from '../components/Footer'; // Ajusta la ruta según la estructura de tu proyecto
import '../styles/table.css'; // Importa los estilos de la tabla

const Calificaciones = () => {
    const [calificaciones, setCalificaciones] = useState([]);
    const [form, setForm] = useState({
        id: '',
        numeroControl: '',
        nombre: '',
        materia: '',
        calificacion: '',
        semestre: '',
        grupo: ''
    });

    useEffect(() => {
        fetchCalificaciones();
    }, []);

    const fetchCalificaciones = async () => {
        try {
            const response = await axios.get('/api/calificaciones');
            setCalificaciones(response.data);
        } catch (error) {
            console.error('Error fetching calificaciones data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleEdit = (calificacion) => {
        setForm(calificacion);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/calificaciones/${id}`);
            fetchCalificaciones();
        } catch (error) {
            console.error('Error deleting calificacion:', error);
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="content-wrap">
            <h1>Lista de calificaciones</h1>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Número de Control</th>
                                <th>Nombre</th>
                                <th>Materia</th>
                                <th>Calificación</th>
                                <th>Semestre</th>
                                <th>Grupo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(calificaciones) && calificaciones.map(calificacion => (
                                <tr key={calificacion.id}>
                                    <td>{calificacion.numeroControl}</td>
                                    <td>{calificacion.nombre}</td>
                                    <td>{calificacion.materia}</td>
                                    <td>{calificacion.calificacion}</td>
                                    <td>{calificacion.semestre}</td>
                                    <td>{calificacion.grupo}</td>
                                    <td>
                                        <button onClick={() => handleEdit(calificacion)}>Editar</button>
                                        <button onClick={() => handleDelete(calificacion.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Calificaciones;