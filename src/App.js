import logo from './spotify.svg';
import fotoHome from './picture-home.jpg';
import instagram from './instagram.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
        <img className="App-logo" src={logo} alt="Logo" />
          <ul>
            <Link to="/">Home</Link>
            <Link to="/faq">FAQ</Link>
            <a>|</a>
            <Link to="/">Inscrever-se</Link>
            <Link to="/">Entrar</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
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

      <footer>
      <div class="wrapper">
        <div class="logo">
          <img className="App-logo" src={logo} alt="Logo" />
        </div>
        <div class="box b">
          <ul className="nav-footer">
            <li>
              <a className="a-cinza">Empresa</a>
            </li>
            <li>
              <a>Sobre</a>
            </li>
            <li>
            <a>Empregos</a>
            </li>
            <li>
            <a>For the record</a>
            </li>
          </ul>
        </div>
        <div class="box c">
          <ul className="nav-footer">
            <li>
              <a className="a-cinza">Comunidade</a>
            </li>
            <li>
              <a>Para artistas</a>
            </li>
            <li>
            <a>Desenvolvedores</a>
            </li>
            <li>
            <a>Publicidade</a>
            </li>
            <li>
            <a>investidores</a>
            </li>
            <li>
            <a>Fornecedores</a>
            </li>
          </ul>
        </div>
        <div class="box d">
          <ul className="nav-footer">
            <li>
              <a className="a-cinza">Links Úteis</a>
            </li>
            <li>
              <a>Suporte</a>
            </li>
            <li>
              <a>Player na Web</a>
            </li>
            <li>
              <a>Aplicativo móvel grátis</a>
            </li>
          </ul>
        </div>
        <div class="box e"> 
          <img className="Social" src={instagram} alt="Logo" />
          <img className="Social" src={twitter} alt="Logo" />
          <img className="Social" src={facebook} alt="Logo" />
        </div>
      </div>
        <div className="p-footer">
          <a href="#">Legal</a>
          <a href="#">Centro de Privacidade</a>
          <a href="#">Política de privacidade</a>
          <a href="#">Cookies</a>
          <a href="#">Sobre anúncios</a>
        </div>
      </footer>
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
