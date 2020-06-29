import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer id="mainFooter" className="d-flex align-items-center justify-content-center">
      <div className="d-flex align-text-bottom">
        <div>
          <div>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={ faFacebookSquare } className="iconFooter p-2"/></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={ faInstagram } className="iconFooter p-2"/></a>
            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={ faTwitter } className="iconFooter p-2"/></a>
            <a href="https://www.youtube.com/"><FontAwesomeIcon icon={ faYoutube } className="iconFooter p-2"/></a>
          </div>
          <div className="pFooter">
            <p><a href="#">Idioma e Legendas</a></p>
            <p><a href="#">Imprensa</a></p>
            <p><a href="#">Privacidade</a></p>
            <p><a href="#">Entre em contato</a></p>
          </div>
        </div>
        <div className="pFooter" >
          <p>Audiodescrição</p>
          <p>Relações com Investidores</p>
          <p>Avisos Legais</p>
        </div>
        <div className="pFooter">
          <p>Centro de Ajuda</p>
          <p>Carreiras</p>
          <p>Preferências de cookies</p>
        </div>
        <div className="pFooter" >
          <p>Cartão pré-pago</p>
          <p>Termos de uso</p>
          <p>Informações corporativas</p>
        </div>
      </div>
    </footer>
  )
}
