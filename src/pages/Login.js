import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/login.css';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUserEmail } = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const staticEmail = 'fer@gmail.com';
        const staticPassword = '123';

        if (email === staticEmail && password === staticPassword) {
            setUserEmail(email);
            navigate('/home');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Inicio de sesión en la plataforma del ITESZ</h1>
                <img src={logo} alt="Logo" className="login-logo" />
                <form onSubmit={handleLogin} className="login-form">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="login-input"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                        className="login-input"
                    />
                    {error && <p className="login-error">{error}</p>}
                    <button type="submit" className="login-button">Iniciar sesión</button>
                </form>
            </div>
            <div className="carousel-container">
                <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
                    <div>
                        <img src="https://www.el-independiente.com.mx/wp-content/uploads/2020/08/WhatsApp-Image-2020-08-22-at-12.43.57-PM.jpeg" alt="Imagen 1" />
                    </div>
                    <div>
                        <img src="https://www.elsoldezamora.com.mx/local/8shql6-tecnologico-de-zamora/ALTERNATES/LANDSCAPE_960/Tecnológico%20de%20Zamora" alt="Imagen 2" />
                    </div>
                    <div>
                        <img src="https://www.el-independiente.com.mx/wp-content/uploads/2022/10/18694DE8-1717-464D-BED0-49B444D00FCD.jpeg" alt="Imagen 3" />
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Autobús_del_Tecnológico_de_Zamora%2C_Michoacán_en_Orizaba.jpg" alt="Imagen 4" />
                    </div>
                    <div>
                        <img src="https://www.el-independiente.com.mx/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-31-at-2.57.29-PM-1024x768.jpeg" alt="Imagen 5" />
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
};

export default Login;