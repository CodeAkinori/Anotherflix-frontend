import React, { useState } from 'react';
import './style.css';

export default function ({ username, password, setUsername, setPassword, handleLogin }) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form className="form-container" onSubmit={handleLogin}>
      <h2>Entrar</h2>
      <input
        type="text"
        placeholder="Email ou nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <button type="submit">Entrar</button>
      <div className="remember-me">
        <input
          type="checkbox"
          id="rememberMe"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
       <label htmlFor="rememberMe" className='RememberMeText'>Lembrar de mim</label>
      </div>
      <div className='infos'>
        <p>
          Novo por aqui? <a href="">Assine agora.</a>
        </p>
      </div>
    </form>
  );
}
