import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css'; 
import logo from '../assets/logo.png';
import { FaSignOutAlt } from 'react-icons/fa'; // Importa el ícono de logout
import { UserContext } from '../contexts/UserContext';

const Navbar = () => {
    const navigate = useNavigate();
    const { userEmail } = useContext(UserContext);

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
            <Link to="/home" className="navbar-logo-link">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link to="/alumnos">Alumnos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/docentes">Docentes</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/grupos">Grupos</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/materias">Materias</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/calificaciones">Calificaciones</Link>
                </li>
                <li className="navbar-item logout-icon">
                    <FaSignOutAlt onClick={handleLogout} />
                </li>
            </ul>
            <div className="navbar-welcome">
                <p>Bienvenido, {userEmail}</p>
            </div>
        </nav>
    );
};

export default Navbar;