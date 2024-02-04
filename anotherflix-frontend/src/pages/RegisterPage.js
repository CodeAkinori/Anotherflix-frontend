import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="username">Nome de Usuário:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* Adicione mais campos conforme necessário */}
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default RegisterPage;
