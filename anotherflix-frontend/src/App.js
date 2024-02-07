import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importe o HomePage
import LoginPage from './pages/LoginPage'; // Certifique-se de ter o LoginPage
import RegisterPage from './pages/RegisterPage'; // Certifique-se de ter o RegisterPage

function App() {
    const [user, setUser] = React.useState(null);

    const handleLoginSuccess = (userData) => {
        setUser(userData);
        // Aqui você pode armazenar o token no localStorage, por exemplo
        localStorage.setItem('userToken', userData.token); // Exemplo de armazenamento do token
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
                {/* Adicione mais rotas conforme necessário */}
            </Routes>
        </Router>
    );
}

export default App;
