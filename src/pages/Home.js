import React from 'react';
import Navbar from '../components/Navbar'; // Ajusta la ruta según la estructura de tu proyecto
import Footer from '../components/Footer'; // Ajusta la ruta según la estructura de tu proyecto
import { Link } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBook, FaClipboardList } from 'react-icons/fa'; // Importa los íconos
import '../styles/home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content">
                <h1>Bienvenido a la plataforma del ITESZ</h1>
                <p>Utiliza los siguientes enlaces para navegar a las diferentes secciones:</p>
                <ul className="home-links">
                    <li>
                        <Link to="/alumnos">
                            <FaUserGraduate className="home-icon" /> Alumnos
                        </Link>
                    </li>
                    <li>
                        <Link to="/docentes">
                            <FaChalkboardTeacher className="home-icon" /> Docentes
                        </Link>
                    </li>
                    <li>
                        <Link to="/grupos">
                            <FaUsers className="home-icon" /> Grupos
                        </Link>
                    </li>
                    <li>
                        <Link to="/materias">
                            <FaBook className="home-icon" /> Materias
                        </Link>
                    </li>
                    <li>
                        <Link to="/calificaciones">
                            <FaClipboardList className="home-icon" /> Calificaciones
                        </Link>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Home;