import React from 'react';
import logo from './spotify.svg';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar(){
    return (
        <div>
            <nav className="nav-bar">
            <img className="App-logo" src={logo} alt="Logo" />
                <ul>
                <Link to="/">Home</Link>
                <Link to="/faq">FAQ</Link>
                <a>|</a>
                <Link to="/cadastro">Inscrever-se</Link>
                <Link to="/login">Entrar</Link>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;