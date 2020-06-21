import React,{useState} from 'react';
import {Carousel} from 'react-bootstrap';
import './style.css'
import $ from 'jquery'



export default function DisplayVideos(){
    const [index, setIndex] = useState(0);
    const [startDisplay,setStartDisplay] = useState(false)

    const handleSelect = (selectedIndex, e) => {
       
       
      setIndex(selectedIndex);
    };
    
    // $(document).ready(function(){
    //     $('.DisplayVideos a').removeAttr('href')
    //   });
    

    $('.DisplayVideos a')
    .click(function(event){
        $('.DisplayVideos .carousel-control-prev').css('display','inline') 
    })
    $('.DisplayVideos a')
    .click(function(event){
        $('.DisplayVideos .carousel-control-prev').css('display','block') 
    })
        
    

    return (
        <div className="DisplayVideos">
            <h4 className="p-2">Populares</h4>

            <Carousel activeIndex={index} onSelect={handleSelect} interval='999999'>
                <Carousel.Item>
                    <div className="d-flex">
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                    </div>

                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex">
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex">
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
                        <img className="thumbnail"
                            src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
                            alt="" />
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
