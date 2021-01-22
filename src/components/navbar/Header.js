import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <nav className="Header">

            <div className="logo">
                Yash Tiwari
            </div>

            <ul className="nav-links">
                <li  className="nav-item">Home</li>
                <li className="nav-item">Blogs</li>
                <li className="nav-item">Project</li>
                <li className="nav-item">Services</li>
                <li className="nav-item">Contact</li>
            </ul>

        </nav>
    )
}
