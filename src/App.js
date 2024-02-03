import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importe o HomePage

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> // Rota para HomePage
                {/* Adicione mais rotas conforme necessário */}
            </Routes>
        </Router>
    );
}

export default App;
