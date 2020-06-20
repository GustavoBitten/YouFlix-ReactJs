import React from 'react';
import './App.css';

import Footer from './components/footer/Footer.js';
import Header from './components/header/Header.js';
import DisplayVideos from './components/DisplayVideos';



function App() {
  return (<>
    <Header/>

    <main>

      <DisplayVideos/>
      <DisplayVideos/>
      <DisplayVideos/>
      <DisplayVideos/>
      <DisplayVideos/>

    </main>

    <Footer/>
    </>
  );
}

export default App;
