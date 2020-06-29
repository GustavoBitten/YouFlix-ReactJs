import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import Footer from './components/Footer';
import Header from './components/Header';
import DisplayVideos from './components/DisplayVideos';


function App() {
  const [youtubeVideos, setYoutubeVideos] = useState([])

  function getYoutubeVideos() {
    axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=30&&key=${process.env.REACT_APP_API_KEY}&part=snippet`).then((response) => {
      setYoutubeVideos(response.data.items)
    })
  }

  useEffect(getYoutubeVideos,[])

  return (<>
    <Header/>

    <main>

      <DisplayVideos title="Populares" videoList={ youtubeVideos } startOfVideos={0} endOfVideos={5}/>
      <DisplayVideos title="Meus favoritos" videoList={ youtubeVideos } startOfVideos={10} endOfVideos={15}/>
      <DisplayVideos title="Sugestões para você" videoList={ youtubeVideos } startOfVideos={20} endOfVideos={25}/>

    </main>

    <Footer/>
    </>
  );
}

export default App;
