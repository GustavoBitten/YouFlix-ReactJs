import React,{useState} from 'react';
import {Alert,Button} from 'react-bootstrap';
import './style.css'



export default function DisplayVideos(){
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


// <div className="DisplayVideos">

// <h4 className="p-2">Populares</h4>
// <div className="d-flex">

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
//     <img className="thumbnail"
//         src="https://occ-0-2583-1740.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS5XD8WnlJ7hYI5lfLZLxShKuXURNXUH8UiOEvmseV5PAoLDwFngfSeKuoo6xEHb1LLRlRUUjFIZqkP3tndGWacKz5wsL9vQTi56hm1jkMS_k1SApBBUVaeDAcjNPOqMWjNjSTG-abcl1dK0ZWrQWgzyF4LZh8OiIOiMK0I1OKzP-DyFLsyIzETWaUMngnYfeDNEzE9QIM1lQuMQ5cXSoCO1.jpg?r=482"
//         alt="" />
// </div>
// </div>