import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className='flex gap-4'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Menu">Menu</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
    );
};

export default NavBar;