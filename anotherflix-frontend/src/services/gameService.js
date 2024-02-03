// src/services/gameService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/games';

export const fetchGames = async () => {
    try {
        const response = await axios.get(`${API_URL}`); // Ajuste o caminho se os jogos estiverem em um sub-caminho
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        return [];
    }
};
