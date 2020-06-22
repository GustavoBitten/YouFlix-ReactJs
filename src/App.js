import React from 'react';
import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import DisplayVideos from './components/DisplayVideos';



function App() {
  return (<>
    <Header/>

    <main>

      <DisplayVideos/>
     
    </main>

    <Footer/>
    </>
  );
}

export default App;
