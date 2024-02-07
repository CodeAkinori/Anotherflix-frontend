// Logo Anotherflix
import React from 'react';
import logo from '../../assets/logo.svg';
import './style.css'

export default function() {
    return (
        <div>
            <img src={logo} alt="Logo" className="logo" />
        </div>
    );
}