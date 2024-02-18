import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from '../components/RegisterForm';
import './RegisterPage.css';
import RegisterBackground from '../components/RegisterBackground';
import image from '../assets/background.jpg';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/accounts/register/', {
        username,
        password,
        email,
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
      <div className="background-image">
        <img src={image} alt="Descrição da imagem" />
      </div>
      <RegisterForm
        onSubmit={handleRegister}
        username={username}
        email={email}
        password={password}
        onUsernameChange={(e) => setUsername(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
      />
      <RegisterBackground></RegisterBackground>
    </div>
  );
};

export default RegisterPage;
