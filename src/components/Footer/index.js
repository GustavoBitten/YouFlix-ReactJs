import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <footer id="mainFooter" className="d-flex row align-items-center justify-content-center p-0">
      
        
          <div className="col-12 p-0">

            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={ faFacebookSquare } className="iconFooter py-2 pr-4"/></a>
            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={ faInstagram } className="iconFooter py-2 pr-4 "/></a>
            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={ faTwitter } className="iconFooter py-2 pr-4"/></a>
            <a href="https://www.youtube.com/"><FontAwesomeIcon icon={ faYoutube } className="iconFooter py-2 pr-4 "/></a>
          
          </div>
          <div className="col-12 d-flex flex-row flex-wrap p-0">
          
          <p><a href="#">Idioma e Legendas</a></p>
          <p>Audiodescrição</p>
          <p>Centro de Ajuda</p>
          <p>Cartão pré-pago</p>
          <p><a href="#">Imprensa</a></p>
          <p>Relações com Investidores</p>
          <p>Carreiras</p>
          <p>Termos de uso</p>
          <p><a href="#">Privacidade</a></p>
          <p>Avisos Legais</p>
          <p>Preferências de cookies</p>
          <p>Informações corporativas</p>
          <p><a href="#">Entre em contato</a></p>
          </div>   
          <div className="col-12 p-0 pt-2">
            <button className="service-code" >Código do serviço</button>
            
          </div>     
          <div className="col-12 copyright">
            <span>© 2020 - 2020 You Flix by GustavoBitten and GabrielGonçalves  </span>
          </div>     
      
    </footer>
  )
}
