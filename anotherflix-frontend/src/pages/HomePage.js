// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/gameService'; // Ajuste o caminho conforme necessário
import './HomePage.css'; // Adicione esta linha no topo do seu arquivo HomePage.js
import Button from '@mui/material/Button';
import Header from '../components/Header/'
import Title from '../components/Gametitle'
import Sinopse from '../components/Gamesinopse'
import Carousel from '../components/Carousel'

import image1 from '../assets/Mario4K.jpg';
import image2 from '../assets/Megaman4K.jpg';
import image3 from '../assets/Minecraft4K.jpg';


const HomePage = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const gamesData = await fetchGames();
            console.log(gamesData); // Verifique os dados recebidos
            setGames(gamesData);
        };

        getGames();
    }, []);

    const handleButtonClick = () => {
        console.log('Botão clicado!');
    };

    const handleOpenVideo = () => {
        const videoUrl = "https://www.youtube.com/watch?v=8rC5t116sW8&ab_channel=GreenDeathFlavor"; // Substitua pelo URL do seu vídeo
        window.open(videoUrl, "_blank"); // Abre o vídeo em uma nova aba
    };    

    return (
        <div className='homepage'>
            <Header/>
            <Title/>
            <Sinopse/>
            <Carousel>
                <img src={image1} alt="Imagem 1" />
                <img src={image2} alt="Imagem 2" />
                <img src={image3} alt="Imagem 3" />
                {/* Adicione mais itens conforme necessário */}
            </Carousel>
            <h1>Jogos Disponíveis</h1>
            <Button variant="contained" color="primary" onClick={handleOpenVideo}>
                Assistir Vídeo
            </Button>
            <div>
                {Array.isArray(games) ? games.map(game => (
                    <div key={game.id}>
                        <h2>{game.name}</h2>
                        <p>{game.description}</p>
                        {/* Adicione mais detalhes do jogo conforme o necessário */}
                        <Button variant="contained" color="primary" onClick={handleButtonClick}>
                            Clique Aqui
                        </Button>
                    </div>
                )) : <p>Carregando jogos...</p>}
            </div>
        </div>
    );
};

export default HomePage;
