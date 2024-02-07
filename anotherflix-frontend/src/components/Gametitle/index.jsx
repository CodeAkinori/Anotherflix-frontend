import React from "react";
import './style.css'
import title from "../../assets/darksouls3Logo.png"

export default function() {
    return (
        <div className="title">
            <img src={title} alt="Logo" />
        </div>
    );
}