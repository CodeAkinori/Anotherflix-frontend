import React from "react";
import './style.css'

export default function( { children } ) {
    return (
        <div className="black-banner">
            {children}
        </div>
    )
}