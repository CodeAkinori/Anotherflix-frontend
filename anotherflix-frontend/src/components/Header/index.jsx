import React from "react";
import './style.css'
import logo from "../../assets/logo.svg"

export default function() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
        </div>
    );
}