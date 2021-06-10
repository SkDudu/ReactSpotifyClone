import logo from './spotify.svg';
import fotoHome from './picture-home.jpg';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cadastro from './components/Login/Cadastro'
import Login from './components/Login/Login'
import Playlist from './components/Dashboard/Playlist';
import FaqPage from './components/Faq/FaqPage';
import Date from "./components/date"

import './App.css';
import React from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  axios.get('user').then(
    res => {
      console.log(res);
    },
    err =>{
      console.log(err);
    }
  )

  return(
    <Router>
      <div>
        <Navbar />
          <Switch>
          <Route path="/playlist">
              <Playlist />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/cadastro">
              <Cadastro />
            </Route>
            <Route path="/faq">
              <FaqPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
        <Date />
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


