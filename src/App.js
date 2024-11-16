import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Alumnos from './pages/Alumnos';
import AddAlumno from './pages/AddAlumno';
import EditAlumno from './pages/EditAlumno';
import Docentes from './pages/Docentes';
import AddDocente from './pages/AddDocente';
import EditDocente from './pages/EditDocente';
import Grupos from './pages/Grupos';
import Materias from './pages/Materias';
import Calificaciones from './pages/Calificaciones';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Configura la ruta de inicio como la página de login */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/alumnos" element={<Alumnos />} />
                    <Route path="/add-alumno" element={<AddAlumno />} />
                    <Route path="/edit-alumno/:id" element={<EditAlumno />} />
                    <Route path="/docentes" element={<Docentes />} />
                    <Route path="/add-docente" element={<AddDocente />} />
                    <Route path="/edit-docente/:id" element={<EditDocente />} />
                    <Route path="/grupos" element={<Grupos />} />
                    <Route path="/materias" element={<Materias />} />
                    <Route path="/calificaciones" element={<Calificaciones />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;