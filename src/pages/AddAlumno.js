import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAlumno } from '../services/api'; // Importa la función desde api.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/form.css';

const AddAlumno = () => {
    const [alumno, setAlumno] = useState({
        numero_control: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        correo_electronico: '',
        numero_telefono: '',
        carrera: '',
        semestre: '',
        grupo: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumno({ ...alumno, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createAlumno(alumno);
            navigate('/alumnos');
        } catch (error) {
            console.error('Error al crear el alumno:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Agregar Nuevo Alumno</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Número de Control</label>
                        <input type="text" name="numero_control" value={alumno.numero_control} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={alumno.nombre} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" name="apellido_paterno" value={alumno.apellido_paterno} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" name="apellido_materno" value={alumno.apellido_materno} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Fecha de Nacimiento</label>
                        <input type="date" name="fecha_nacimiento" value={alumno.fecha_nacimiento} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Correo</label>
                        <input type="email" name="correo_electronico" value={alumno.correo_electronico} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="text" name="numero_telefono" value={alumno.numero_telefono} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Carrera</label>
                        <input type="text" name="carrera" value={alumno.carrera} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Semestre</label>
                        <input type="text" name="semestre" value={alumno.semestre} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Grupo</label>
                        <input type="text" name="grupo" value={alumno.grupo} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="save-button">
                        <i className="fas fa-save"></i> Guardar
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddAlumno;