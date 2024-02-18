import React, { useState } from 'react';
import axios from 'axios';
import LoginLogo from '../components/LoginLogo'; // Ajuste o caminho conforme necessário
import LoginForm from '../components/LoginForm';
import BackgroundAnimation from '../components/BackgroundAnimation';
import InfoSac from '../components/InfoSac';

const LoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/accounts/login/', { username, password });
            onLoginSuccess(response.data);
        } catch (error) {
            console.error('Login falhou:', error);
        }
    };

    return (
        <div className="login-container">
            <LoginLogo />
            <BackgroundAnimation/>
            <LoginForm 
              username={username} 
              password={password} 
              setUsername={setUsername} 
              setPassword={setPassword} 
              handleLogin={handleLogin} 
            />
            <InfoSac/>
        </div>
    );
};

export default LoginPage;
