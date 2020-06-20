import React from 'react';
import './Header.css';

export default function Header() {
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
      <button>
        <span></span>
      </button>

    </header>
  )
}