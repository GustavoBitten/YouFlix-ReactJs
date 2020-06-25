import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import $ from 'jquery';

export default function Header() {
  const [ open, setOpen ] = useState(false)
  
  //$('body').ready(()=>{
    console.log()
    
    useEffect(()=>{
      
        $('#searchIcon').click(function(){
         if (!open) {
          // console.log(open)
         $("#searchNav").show(1000);
          $("#searchDiv").css("border-style", "solid");
          $('input').focus()
          setOpen(true);

          
        }
        
    });
    
    

    
     $("input").focusout(function(){

      setTimeout(function(){

        if (open) {
          console.log(open)
          $("#searchNav").hide(1000);
          $("#searchDiv").css("border-style", "none");
          setOpen(false);
        }
      },150)
    })
      
      
    
      
    })
    //})

  
  return (
    <header id="mainHeader" className="w-100 position-fixed d-flex">
      <div id="logoDiv" className="d-flex">
        <img id="logo" className="" src="https://fontmeme.com/permalink/200620/c721a050b5204bd977246df2c78bac67.png" alt="YouFlix"/>
      </div>
      <div id="menuButtons" className="d-flex align-items-center justify-content-between">
        <a href="/" className="p-2">Início</a>
        <a href="/" className="p-2">Inscrições</a>
        <a href="/" className="p-2">Vídeos</a>
        <a href="/" className="p-2">Mais recentes</a>
        <a href="/" className="p-2">Minha lista</a>
      </div>
      <div id="headerButtonDiv" className="d-flex align-items-center justify-content-center">
        <div id="searchDiv" className="align-items-center justify-content-center">
          <button id="searchIcon" disabled={open} className="d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={ faSearch } className="icon"/>
          </button>
          <Form.Group id="searchNav" className="align-items-center justify-content-center pr-3">
            <Form.Control type="text" placeholder="Vídeos, canais e música"/>
          </Form.Group>
        </div>
        <button className="d-flex align-items-center justify-content-center p-3">
          <FontAwesomeIcon icon={ faGift } className="icon"/>
        </button>
        <button className="d-flex align-items-center justify-content-center p-3">
          <FontAwesomeIcon icon={ faBell } className="icon"/>
        </button>
        <div className="d-flex align-items-center justify-content-center p-3">
          <div>
            <img src="https://occ-0-2583-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABaEhTOl-Kw-lsSqEuyaGQycANp6tuS_ZY6ruLJAfLCuUQh_29tMd8n-fsrHLx8OWne3KbdnYZhez5ecUekSGOFk.png?r=b97" alt="Profile Icon"/>
          </div>
          <FontAwesomeIcon icon={ faCaretDown } className="icon ml-2"/>
        </div>
      </div>

    </header>
  )
}