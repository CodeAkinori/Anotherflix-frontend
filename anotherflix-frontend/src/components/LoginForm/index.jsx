import React from 'react';
import './style.css'

export default function ({ username, password, setUsername, setPassword, handleLogin }) {
    return (
        <form className="form-container" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
    </form>
    );
}