import logo from './spotify.svg';
import fotoHome from './picture-home.jpg';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './components/Login/Cadastro'
import Login from './components/Login/Login'
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return(
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <body>
        <div>
        <img className="Foto" src={fotoHome} alt="foto home"/>
        <button className="BtnDownload">BAIXE O SPOTIFY</button>
        <p>Milhões de musicas para ouvir. E nem precisa de cartão de crédito</p>
        </div>
      </body>
    </div>
  );
}

function Faq() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-bar">
        <img className="App-logo" src={logo} alt="Logo" />
          <ul>
            <a href="#">Premium</a>
            <a href="#">Suporte</a>
            <a href="#">Baixar</a>
            <a>|</a>
            <a href="#">Inscrever-se</a>
            <a href="#">Entrar</a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

