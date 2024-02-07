import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Adicione se necessário
    // Adicione mais estados conforme necessário para outros campos

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            // Substitua 'http://localhost:8000/api/register' pelo seu endpoint de registro
            const response = await axios.post('http://localhost:8000/accounts/register/', {
                username,
                password,
                email, // Remova ou adicione mais campos conforme necessário
            });
            console.log('Registro bem-sucedido:', response.data);
            // Aqui você pode redirecionar para a página de login ou diretamente para a HomePage com o usuário já autenticado
        } catch (error) {
            console.error('Erro no registro:', error);
            // Tratar erros de registro aqui, talvez mostrando uma mensagem ao usuário
        }
    };

    return (
        <div className="register-container">
            <div className="background-animation"></div>
            <form className="form" onSubmit={handleRegister}>
                <h2>Filmes, séries e muito mais, sem limites</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
