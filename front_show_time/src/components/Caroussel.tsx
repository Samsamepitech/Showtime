import React, { useState } from "react";
import {Carousel} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../style/Carousel.css';

export const CarouselMod = () => {

    /** stokcage image renvoie vers comp
     * const image = require("./assets/cat.jpg").default;
export default class testComponent extends Component {
  render() {
    return (
      <div>
        <img src={image} />
      </div>
    );
  }
}
     */

    return (

<Carousel>
  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/pop")}><img className="d-block w-60" src="../images/pop1.png"  /> </Link>
  </Carousel.Item>

  <Carousel.Item className="slide" interval={2000}>
   <Link to={("/concert/electro")}><img className="d-block w-60" src="../images/electro1.png" /></Link>
  </Carousel.Item>

  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/urbain")}> <img className="d-block w-60" src="../images/urba.png"/> </Link>
  </Carousel.Item>


  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/rock")}> <img className="d-block w-60" width="100%" height="73%" src="../images/rock2.png"  /> </Link>
  </Carousel.Item>

  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/classique")}><img className="d-block w-60" src="../images/classique1.png"

    /> </Link>
  </Carousel.Item>

  <Carousel.Item className="slide" interval={2000}>
  <Link to={("/concert/hardrock")}> <img className="d-block w-60" src="../images/hard1.png" /> </Link>
  </Carousel.Item>
</Carousel>
        );
    }

    export default CarouselMod;