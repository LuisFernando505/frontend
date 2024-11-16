import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Ajusta la ruta según la estructura de tu proyecto
import Footer from '../components/Footer'; // Ajusta la ruta según la estructura de tu proyecto
import '../styles/table.css'; // Importa los estilos de la tabla

const Grupos = () => {
    const [grupos, setGrupos] = useState([]);
    const [form, setForm] = useState({
        id: '',
        nombre: '',
        carrera: '',
        semestre: '',
        grupo: '',
        turno: ''
    });

    useEffect(() => {
        fetchGrupos();
    }, []);

    const fetchGrupos = async () => {
        try {
            const response = await axios.get('/api/grupos');
            setGrupos(response.data);
        } catch (error) {
            console.error('Error fetching grupos data:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleEdit = (grupo) => {
        setForm(grupo);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/grupos/${id}`);
            fetchGrupos();
        } catch (error) {
            console.error('Error deleting grupo:', error);
        }
    };

    return (
        <div className="page-container">
            <Navbar />
            <div className="content-wrap">
                <h1>Lista de grupos</h1>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Carrera</th>
                                <th>Semestre</th>
                                <th>Grupo</th>
                                <th>Turno</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(grupos) && grupos.map(grupo => (
                                <tr key={grupo.id}>
                                    <td>{grupo.nombre}</td>
                                    <td>{grupo.carrera}</td>
                                    <td>{grupo.semestre}</td>
                                    <td>{grupo.grupo}</td>
                                    <td>{grupo.turno}</td>
                                    <td>
                                        <button onClick={() => handleEdit(grupo)}>Editar</button>
                                        <button onClick={() => handleDelete(grupo.id)}>Eliminar</button>
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

export default Grupos;