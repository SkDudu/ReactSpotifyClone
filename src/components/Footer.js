import React, { useState } from 'react';
import logo from './spotify.svg';
import instagram from './instagram.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'

import { parseISO, isAfter } from 'date-fns';

function Footer(){
    return(
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
    );
}

export default Footer;