import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Footer from './components/Footer';
import Header from './components/Header';
import DisplayVideos from './components/DisplayVideos';


function App() {
  const [mainVideos, setMainVideos] = useState([]);

  function getMainVideos(){

    axios.get('http://localhost:3333/fast-main-videos').then((response)=>{

        setMainVideos(response.data)
    })

  }

  useEffect(getMainVideos,[])


  return (<>
    <Header/>

    <main>

      <DisplayVideos title="Populares" videoList={ mainVideos } startOfVideos={0} endOfVideos={5}/>
      <DisplayVideos title="Meus favoritos" videoList={ mainVideos } startOfVideos={10} endOfVideos={15}/>
      <DisplayVideos title="Sugestões para você" videoList={ mainVideos } startOfVideos={20} endOfVideos={25}/>

    </main>

    <Footer/>
    </>
  );
}

export default App;
