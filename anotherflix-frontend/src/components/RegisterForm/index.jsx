import React from 'react';
import './style.css'

const RegisterForm = ({ onSubmit, username, email, password, onUsernameChange, onEmailChange, onPasswordChange }) => {
  return (
    <div>
      <div className='etitle'>
        <h2>
         Filmes, séries e muito mais, sem limites
        </h2>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={onUsernameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
