import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Ajusta la ruta según la estructura de tu proyecto
import Footer from '../components/Footer'; // Ajusta la ruta según la estructura de tu proyecto
import '../styles/table.css'; // Importa los estilos de la tabla

const Materias = () => {
    const [materias, setMaterias] = useState([]);
    const [form, setForm] = useState({
        id: '',
        codigo: '',
        nombre: '',
        descripcion: '',
        creditos: '',
        semestre: '',
        carrera: ''
    });

    useEffect(() => {
        fetchMaterias();
    }, []);

    const fetchMaterias = async () => {
        try {
            const response = await axios.get('/api/materias');
            setMaterias(response.data);
        } catch (error) {
            console.error('Error fetching materias data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleEdit = (materia) => {
        setForm(materia);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/materias/${id}`);
            fetchMaterias();
        } catch (error) {
            console.error('Error deleting materia:', error);
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="content-wrap">
            <h1>Lista de materias</h1>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Créditos</th>
                                <th>Semestre</th>
                                <th>Carrera</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(materias) && materias.map(materia => (
                                <tr key={materia.id}>
                                    <td>{materia.codigo}</td>
                                    <td>{materia.nombre}</td>
                                    <td>{materia.descripcion}</td>
                                    <td>{materia.creditos}</td>
                                    <td>{materia.semestre}</td>
                                    <td>{materia.carrera}</td>
                                    <td>
                                        <button onClick={() => handleEdit(materia)}>Editar</button>
                                        <button onClick={() => handleDelete(materia.id)}>Eliminar</button>
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

export default Materias;