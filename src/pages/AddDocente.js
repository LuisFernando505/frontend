import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createDocente } from '../services/api'; // Importa la función desde api.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/form.css';

const AddDocente = () => {
    const [docente, setDocente] = useState({
        numero_empleado: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        correo_electronico: '',
        numero_telefono: '',
        departamento: '',
        especialidad: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDocente({ ...docente, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createDocente(docente);
            navigate('/docentes');
        } catch (error) {
            console.error('Error al crear el docente:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Agregar Nuevo Docente</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Número de Empleado</label>
                        <input type="text" name="numero_empleado" value={docente.numero_empleado} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={docente.nombre} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Apellido Paterno</label>
                        <input type="text" name="apellido_paterno" value={docente.apellido_paterno} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Apellido Materno</label>
                        <input type="text" name="apellido_materno" value={docente.apellido_materno} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Fecha Nacimiento</label>
                        <input type="date" name="fecha_nacimiento" value={docente.fecha_nacimiento} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Correo</label>
                        <input type="email" name="correo_electronico" value={docente.correo_electronico} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input type="text" name="numero_telefono" value={docente.numero_telefono} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Departamento</label>
                        <input type="text" name="departamento" value={docente.departamento} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Especialidad</label>
                        <input type="text" name="especialidad" value={docente.especialidad} onChange={handleChange} required />
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

export default AddDocente;