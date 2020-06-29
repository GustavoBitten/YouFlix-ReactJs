import React,{useState, useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import axios from 'axios';
import './style.css'
//import $ from 'jquery'


export default function DisplayVideos({ title, videoList, startOfVideos, endOfVideos  }){
    const [index, setIndex] = useState(0);
    const [ startDisplay,setStartDisplay ] = useState(false);
    // const [mainVideos, setMainVideos] = useState([]);


    const handleSelect = (selectedIndex, e) => {


      setIndex(selectedIndex);
    };

    // function getMainVideos(){

    //     axios.get('http://localhost:3333/fast-main-videos').then((response)=>{

    //         setMainVideos(response.data)
    //     })

    // }

    // useEffect(getMainVideos,[])

    return (
        <div className="DisplayVideos">
            <h4 className="p-2 pl-5">{title}</h4>

            <Carousel activeIndex={index} onSelect={handleSelect} interval='999999'>
                <Carousel.Item>
                  <div className="d-flex justify-content-center">

                  {videoList.slice(startOfVideos , endOfVideos ).map((video) => {
                      //console.log(video.snippet.thumbnails.maxres.url)
                      return (
                      <a
                      key={video.snippet.localized.title}
                      className="thumbnail"
                      href={`https://youtube.com/watch?v=${video.id}`}
                      >
                      <img
                      src={(video.snippet.thumbnails.maxres !== undefined) ? video.snippet.thumbnails.maxres.url : video.snippet.thumbnails.standard.url }
                      alt={video.snippet.localized.title}
                      />
                      </a>)
                    })}

                  </div>

                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center">

                    {videoList.slice((startOfVideos + 5 ), (endOfVideos + 5 ) ).map((video) => {
                      //console.log(video.snippet.thumbnails.maxres.url)
                      return (
                      <a
                      key={video.snippet.localized.title}
                      className="thumbnail"
                      href={`https://youtube.com/watch?v=${video.id}`}
                      >
                      <img
                      src={(video.snippet.thumbnails.maxres !== undefined) ? video.snippet.thumbnails.maxres.url : video.snippet.thumbnails.standard.url }
                      alt={video.snippet.localized.title}
                      />
                      </a>)
                    })}

                  </div>

                </Carousel.Item>
            </Carousel>

        </div>



);
}



// {/* <div className="DisplayVideos">
// <h4 className="p-2">Populares</h4>
// <div className="d-flex">
//    <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
//     <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
//     <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
//     <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
//     <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
// </div>
// </div> */}
