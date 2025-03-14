import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'
function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={true}
        showArrows={true}
      >
        {img.map((imageItemLink,i) => {
          return <img src={imageItemLink}key={i} />
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  )
}
// cerosel effect
export default CarouselEffect
